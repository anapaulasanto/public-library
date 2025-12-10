import { useSendRentalNotifications } from "../../../../../hooks/notification";
import { useState, useEffect } from "react";
import { ModalSucess } from "../../../../ModalSucess";
import { ModalError } from "../../../../ModalError";
import "./style.css";

export const SectionNotifications = () => {
    const { mutate: sendNotifications, isPending } = useSendRentalNotifications();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (showSuccess) {
            document.getElementById("modal-notifications-success").showModal();
        }
    }, [showSuccess]);

    useEffect(() => {
        if (showError) {
            document.getElementById("modal-notifications-error").showModal();
        }
    }, [showError]);

    const handleSendNotifications = () => {
        sendNotifications(undefined, {
            onSuccess: (data) => {
                console.log("Resposta:", data);
                setShowSuccess(true);
            },
            onError: (error) => {
                console.error("Erro:", error);
                setErrorMessage(error.response?.data?.message || "Erro ao enviar notificações");
                setShowError(true);
            }
        });
    };

    const handleCloseSuccess = () => {
        document.getElementById("modal-notifications-success").close();
        setShowSuccess(false);
    };

    const handleCloseError = () => {
        document.getElementById("modal-notifications-error").close();
        setShowError(false);
    };

    return (
        <div className="section-notifications">
            <div className="notifications-header">
                <h2>Gerenciamento de Notificações</h2>
                <p>Envie lembretes de devolução para usuários com livros próximos do vencimento</p>
            </div>

            <div className="notifications-content">
                <div className="notification-card">
                    <div className="card-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3>Notificações de Devolução</h3>
                    <p>Envia emails automáticos para usuários com devoluções agendadas para daqui a 3 dias</p>
                    
                    <div className="notification-info">
                        <div className="info-item">
                            <span className="info-label">Frequência:</span>
                            <span className="info-value">Diária às 09:00</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Antecedência:</span>
                            <span className="info-value">3 dias</span>
                        </div>
                    </div>

                    <button 
                        className="btn-send-notifications" 
                        onClick={handleSendNotifications}
                        disabled={isPending}
                    >
                        {isPending ? "Enviando..." : "Enviar Notificações Agora"}
                    </button>
                </div>
            </div>

            {showSuccess && (
                <ModalSucess 
                    modalId="modal-notifications-success"
                    h1="Sucesso!"
                    p="Notificações enviadas com sucesso para todos os usuários com devoluções próximas."
                />
            )}
            {showError && (
                <ModalError 
                    modalId="modal-notifications-error"
                    h1="Erro ao enviar"
                    p={errorMessage}
                />
            )}
        </div>
    );
};
