package br.edu.unichristus.domain.dto.notification;

import java.time.LocalDate;

public class DueDateReminderReportDTO {
    private LocalDate targetDate;
    private int rentalsChecked;
    private int remindersSent;
    private int skippedMissingEmail;
    private int skippedInvalidDate;
    private int sendFailures;

    public LocalDate getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
    }

    public int getRentalsChecked() {
        return rentalsChecked;
    }

    public void setRentalsChecked(int rentalsChecked) {
        this.rentalsChecked = rentalsChecked;
    }

    public int getRemindersSent() {
        return remindersSent;
    }

    public void setRemindersSent(int remindersSent) {
        this.remindersSent = remindersSent;
    }

    public int getSkippedMissingEmail() {
        return skippedMissingEmail;
    }

    public void setSkippedMissingEmail(int skippedMissingEmail) {
        this.skippedMissingEmail = skippedMissingEmail;
    }

    public int getSkippedInvalidDate() {
        return skippedInvalidDate;
    }

    public void setSkippedInvalidDate(int skippedInvalidDate) {
        this.skippedInvalidDate = skippedInvalidDate;
    }

    public int getSendFailures() {
        return sendFailures;
    }

    public void setSendFailures(int sendFailures) {
        this.sendFailures = sendFailures;
    }
}
