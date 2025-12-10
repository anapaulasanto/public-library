import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import profileIcon from '../../../../assets/icons/profile-icon.png'
import { CardHeader } from "../CardHeader";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom"
import { Skeleton } from "../../../Skeleton/index.jsx";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext/index.jsx";
import { useCheckUpcomingReturns } from "../../../../hooks/rental";
import { ModalRentalNotification } from "../../../ModalRentalNotification";

export const Header = () => {
    const { user, isLoading, error } = useContext(AuthContext);
    const { data: upcomingReturns } = useCheckUpcomingReturns(user?.id);
    console.log(user);

    const handleOpenNotification = () => {
        document.getElementById("modal-rental-notification-manual").showModal();
    };

    if (isLoading) {
        return (
            <Skeleton />
        )
    }

    if (error) {
        return (
            <section className="flex items-center justify-center h-40  border-gray-200 font-bold ">
                <p>Ops... Não consegui carregar informaçõs desse usuário</p>
            </section>
        );
    }    

    return (
        <section className="flex flex-col items-center gap-20 py-12 bg-gradient border border-gray-200 text-white w-full lg:flex-row justify-around">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col lg:flex-row">
                    <div
                        className="flex items-center gap-3 w-full"
                    >
                        <div className="w-16 rounded-full border-2 border-white">
                            <img
                                src={profileIcon}
                                alt="Icone de perfil do usuário"
                                className='w-16'
                            />
                        </div>
                        <ContentTitle
                            h1={user.name}
                            p={user.email}
                        />
                    </div>
                </div>
                <CardHeader />
            </div>
            <div className="flex gap-3">
                {upcomingReturns && upcomingReturns.length > 0 && (
                    <button
                        onClick={handleOpenNotification}
                        className="indicator bg-slate-100 text-blue-800 font-semibold shadow rounded-xl w-12 h-10 flex items-center justify-center hover:cursor-pointer hover:bg-gray-50/80"
                        title="Notificações de devolução"
                    >
                        <span className="indicator-item badge badge-error badge-sm">{upcomingReturns.length}</span>
                        <IoMdNotificationsOutline size={22} />
                    </button>
                )}
                <Link
                    to="/user/profile/account"
                    className="bg-slate-100 text-blue-800 font-semibold shadow rounded-xl w-32 h-10 flex items-center justify-center gap-2 text-sm hover:cursor-pointer hover:bg-gray-50/80"
                >
                    <CiSettings size={18} />
                    Editar conta
                </Link>
            </div>
            
            <ModalRentalNotification 
                rentals={upcomingReturns} 
                modalId="modal-rental-notification-manual"
            />
        </section>
    )
}