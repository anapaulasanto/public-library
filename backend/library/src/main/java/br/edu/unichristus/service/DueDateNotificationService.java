package br.edu.unichristus.service;

import br.edu.unichristus.domain.dto.notification.DueDateReminderReportDTO;
import br.edu.unichristus.domain.model.Rental;
import br.edu.unichristus.repository.RentalRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

@Service
public class DueDateNotificationService {

    private static final Logger logger = LoggerFactory.getLogger(DueDateNotificationService.class);

    private final RentalRepository rentalRepository;
    private final EmailNotificationService emailNotificationService;

    public DueDateNotificationService(RentalRepository rentalRepository,
                                      EmailNotificationService emailNotificationService) {
        this.rentalRepository = rentalRepository;
        this.emailNotificationService = emailNotificationService;
    }

    @Scheduled(cron = "0 0 0 * * *")
    public void sendDailyDueDateReminders() {
        DueDateReminderReportDTO report = sendDueDateReminders();
        logger.info("Scheduler de lembretes executado. Data alvo: {}, processados: {}, enviados: {}, falhas: {}",
                report.getTargetDate(), report.getRentalsChecked(), report.getRemindersSent(), report.getSendFailures());
    }

    public DueDateReminderReportDTO sendDueDateReminders() {
        LocalDate targetDate = LocalDate.now().plusDays(3);
        List<Rental> activeRentals = rentalRepository.findByStatus("active");

        int checked = 0;
        int sent = 0;
        int missingEmail = 0;
        int invalidDate = 0;
        int failures = 0;

        for (Rental rental : activeRentals) {
            checked++;

            LocalDate returnDate;
            try {
                returnDate = LocalDate.parse(rental.getReturnDate());
            } catch (DateTimeParseException | NullPointerException e) {
                invalidDate++;
                logger.warn("Data de devolução inválida para aluguel {}: {}", rental.getId(), rental.getReturnDate());
                continue;
            }

            if (!returnDate.isEqual(targetDate)) {
                continue;
            }

            if (rental.getUser() == null || rental.getUser().getEmail() == null || rental.getUser().getEmail().isBlank()) {
                missingEmail++;
                logger.warn("Usuário sem e-mail cadastrado para aluguel {}", rental.getId());
                continue;
            }

            try {
                emailNotificationService.sendDueDateReminder(rental, returnDate);
                sent++;
            } catch (Exception ex) {
                failures++;
                logger.error("Erro ao enviar e-mail para aluguel {}: {}", rental.getId(), ex.getMessage(), ex);
            }
        }

        DueDateReminderReportDTO report = new DueDateReminderReportDTO();
        report.setTargetDate(targetDate);
        report.setRentalsChecked(checked);
        report.setRemindersSent(sent);
        report.setSkippedMissingEmail(missingEmail);
        report.setSkippedInvalidDate(invalidDate);
        report.setSendFailures(failures);
        return report;
    }
}
