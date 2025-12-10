package br.edu.unichristus.service;

import br.edu.unichristus.domain.model.Rental;
import br.edu.unichristus.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class RentalNotificationService {

    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private EmailService emailService;

    @Value("${notification.rental.days-before-return:3}")
    private int daysBeforeReturn;

    @Value("${notification.rental.enabled:true}")
    private boolean notificationEnabled;

    /**
     * Tarefa agendada que executa todos os dias às 09:00
     * Verifica aluguéis que vencem em 3 dias e envia notificações
     */
    @Scheduled(cron = "0 0 9 * * *") // Executa às 09:00 todos os dias
    public void checkAndSendRentalNotifications() {
        if (!notificationEnabled) {
            System.out.println("Notificações de aluguel desabilitadas");
            return;
        }

        System.out.println("Iniciando verificação de notificações de devolução...");

        LocalDate today = LocalDate.now();
        LocalDate notificationDate = today.plusDays(daysBeforeReturn);

        // Buscar todos os aluguéis ativos
        List<Rental> allRentals = rentalRepository.findAll();
        List<Rental> activeRentals = allRentals.stream()
                .filter(rental -> "active".equalsIgnoreCase(rental.getStatus()))
                .toList();

        int notificationsSent = 0;

        // Formatos de data aceitos
        DateTimeFormatter formatterBr = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter formatterIso = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        for (Rental rental : activeRentals) {
            String returnDateStr = rental.getReturnDate();
            
            if (returnDateStr == null || returnDateStr.isEmpty()) {
                continue;
            }
            
            try {
                // Remover timestamp se existir (ex: "2025-12-12 00:00:00" -> "2025-12-12")
                String dateOnly = returnDateStr.split(" ")[0];
                
                // Converter String para LocalDate (tenta formato brasileiro primeiro, depois ISO)
                LocalDate returnDate;
                try {
                    returnDate = LocalDate.parse(dateOnly, formatterBr);
                } catch (Exception e) {
                    returnDate = LocalDate.parse(dateOnly, formatterIso);
                }
                
                // Verifica se a data de devolução é exatamente daqui a 3 dias
                if (returnDate.equals(notificationDate)) {
                    String userEmail = rental.getUser().getEmail();
                    String userName = rental.getUser().getName();
                    String bookTitle = rental.getBook().getTitle();
                    
                    if (userEmail != null && !userEmail.isEmpty()) {
                        emailService.sendRentalReturnNotification(
                            userEmail,
                            userName,
                            bookTitle,
                            returnDate
                        );
                        notificationsSent++;
                    }
                }
            } catch (Exception e) {
                System.err.println("Erro ao processar data de devolução: " + returnDateStr + " - " + e.getMessage());
            }
        }

        System.out.println(String.format(
            "Verificação concluída. %d notificação(ões) enviada(s) para aluguéis que vencem em %s",
            notificationsSent,
            notificationDate
        ));
    }

    /**
     * Método manual para testar o envio de notificações (pode ser chamado via endpoint)
     */
    public void sendTestNotifications() {
        checkAndSendRentalNotifications();
    }
}
