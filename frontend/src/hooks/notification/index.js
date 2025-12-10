import { useMutation } from "@tanstack/react-query";
import { sendRentalNotifications } from "../../services/notification";

export const useSendRentalNotifications = () => {
    return useMutation({
        mutationFn: sendRentalNotifications,
        onSuccess: (data) => {
            console.log("Notificações enviadas com sucesso:", data);
        },
        onError: (error) => {
            console.error("Erro ao enviar notificações:", error);
        }
    });
}
