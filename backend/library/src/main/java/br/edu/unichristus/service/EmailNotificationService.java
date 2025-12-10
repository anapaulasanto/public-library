package br.edu.unichristus.service;

import br.edu.unichristus.domain.model.Rental;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

@Service
public class EmailNotificationService {

    private static final Logger logger = LoggerFactory.getLogger(EmailNotificationService.class);
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE;

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String from;

    public EmailNotificationService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendDueDateReminder(Rental rental, LocalDate dueDate) {
        Objects.requireNonNull(rental, "rental");
        if (rental.getUser() == null || rental.getUser().getEmail() == null || rental.getUser().getEmail().isBlank()) {
            throw new IllegalArgumentException("Usuário não possui e-mail cadastrado");
        }
        if (rental.getBook() == null) {
            throw new IllegalArgumentException("Aluguel não possui livro associado");
        }

        String to = rental.getUser().getEmail();
        String subject = "Aviso: devolução em 3 dias - " + rental.getBook().getTitle();
        String body = String.format(
                "Olá, %s!\n\n" +
                        "Lembrete: o livro \"%s\" deve ser devolvido em %s.\n" +
                        "Status atual: %s.\n\n" +
                        "Para evitar multas ou bloqueios, devolva ou renove o empréstimo até a data informada.\n\n" +
                        "Biblioteca Pública - Sistema Helpm",
                rental.getUser().getName(),
                rental.getBook().getTitle(),
                DATE_FORMATTER.format(dueDate),
                rental.getStatus()
        );

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
        logger.info("E-mail de lembrete enviado para {} referente ao aluguel {}", to, rental.getId());
    }
}
