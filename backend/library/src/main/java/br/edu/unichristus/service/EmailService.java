package br.edu.unichristus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    /**
     * Envia email de notificação de devolução de livro
     * @param toEmail Email do destinatário
     * @param userName Nome do usuário
     * @param bookTitle Título do livro
     * @param returnDate Data de devolução
     */
    public void sendRentalReturnNotification(String toEmail, String userName, String bookTitle, LocalDate returnDate) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(toEmail);
            message.setSubject("Lembrete: Devolução de Livro - " + bookTitle);
            
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            String formattedDate = returnDate.format(formatter);
            
            String emailBody = String.format(
                "Olá, %s!\n\n" +
                "Este é um lembrete de que o prazo de devolução do livro \"%s\" está próximo.\n\n" +
                "Data de devolução: %s\n\n" +
                "Caso não tenha terminado sua leitura, você pode alugá-lo novamente.\n\n" +
                "Atenciosamente,\n" +
                "Equipe Public Library",
                userName,
                bookTitle,
                formattedDate
            );
            
            message.setText(emailBody);
            
            mailSender.send(message);
            
            System.out.println("Email enviado com sucesso para: " + toEmail);
        } catch (Exception e) {
            System.err.println("Erro ao enviar email para " + toEmail + ": " + e.getMessage());
            e.printStackTrace();
        }
    }
}
