package br.edu.unichristus.controller;

import br.edu.unichristus.service.RentalNotificationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/notifications")
@Tag(name = "Notifications", description = "Endpoints para gerenciamento de notificações")
public class NotificationController {

    @Autowired
    private RentalNotificationService notificationService;

    @Operation(
        summary = "Enviar notificações de devolução manualmente | role: [ADMIN]",
        description = "Dispara manualmente a verificação e envio de notificações para aluguéis que vencem em 3 dias"
    )
    @PostMapping("/rental/send")
    public ResponseEntity<Map<String, String>> sendRentalNotifications() {
        Map<String, String> response = new HashMap<>();
        
        try {
            notificationService.sendTestNotifications();
            response.put("message", "Verificação de notificações executada com sucesso");
            response.put("status", "success");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "Erro ao enviar notificações: " + e.getMessage());
            response.put("status", "error");
            return ResponseEntity.internalServerError().body(response);
        }
    }
}
