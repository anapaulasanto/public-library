import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";
import { NavUser } from "../../components/user/Profile/Nav";
import { Header } from "../../components/user/Profile/Header";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useCheckUpcomingReturns } from "../../hooks/rental";
import { ModalRentalNotification } from "../../components/ModalRentalNotification";

export const UserProfileLayout = () => {
    const { user } = useContext(AuthContext);
    const { data: upcomingReturns } = useCheckUpcomingReturns(user?.id);
    const [hasShownNotification, setHasShownNotification] = useState(false);

    useEffect(() => {
        if (upcomingReturns && upcomingReturns.length > 0 && !hasShownNotification) {
            const timer = setTimeout(() => {
                document.getElementById("modal-rental-notification-auto").showModal();
                setHasShownNotification(true);
            }, 1000);
            
            return () => clearTimeout(timer);
        }
    }, [upcomingReturns, hasShownNotification]);

    return (
        <div>
            <NavUser />
            <div className="flex justify-center">
                <Container>
                    <Header />
                    <Outlet />
                </Container>
            </div>
            
            <ModalRentalNotification 
                rentals={upcomingReturns} 
                modalId="modal-rental-notification-auto"
            />
        </div >
    )
}