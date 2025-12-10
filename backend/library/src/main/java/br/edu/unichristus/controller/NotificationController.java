package br.edu.unichristus.controller;

import br.edu.unichristus.domain.dto.notification.DueDateReminderReportDTO;
import br.edu.unichristus.service.DueDateNotificationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/notifications")
@Tag(name = "Notifications")
public class NotificationController {

    private final DueDateNotificationService dueDateNotificationService;

    public NotificationController(DueDateNotificationService dueDateNotificationService) {
        this.dueDateNotificationService = dueDateNotificationService;
    }

    @Operation(summary = "Dispara lembretes de devolução (3 dias antes) manualmente | role: [ADMIN]")
    @PostMapping("/due-reminders")
    public DueDateReminderReportDTO sendDueDateReminders() {
        return dueDateNotificationService.sendDueDateReminders();
    }
}
