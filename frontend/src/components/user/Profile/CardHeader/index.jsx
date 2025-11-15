import { FaBookOpen, FaCalendar, FaStar } from "react-icons/fa";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../../../context/AuthContext/index.jsx";
import { useFetchRentalsByUser } from "../../../../hooks/rental";

export const CardHeader = () => {
    const { user } = useContext(AuthContext);
    const { data: rentals, isLoading: isLoadingRentals } = useFetchRentalsByUser(user?.id);
    
    const year = useMemo(() => {
        return user?.createdAt?.substring(0, 4) || '';
    }, [user?.createdAt]);

    const rentalsCount = useMemo(() => {
        if (isLoadingRentals) return null;
        return Array.isArray(rentals) ? rentals.length : 0;
    }, [rentals, isLoadingRentals]);

    return (
        <div className="flex flex-col mx-auto gap-4 lg:flex-row">
            <div className="flex items-center justify-center p-2 px-4 bg-gray-50/20 gap-3 rounded-xl w-45 h-22">
                <FaCalendar size={25} />
                <div className="flex flex-col items-center ">
                    <p className="text-xs text-gray-50/60">Membro desde</p>
                    <p className="text-2xl mx-auto">{year}</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-2 px-4 bg-gray-50/20 gap-3 rounded-xl w-45 h-22">
                <FaStar size={25} />
                <div className="flex flex-col items-center ">
                    <p className="text-xs text-gray-50/60">Avaliações</p>
                    <p className="text-2xl mx-auto">0</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-2 px-4 bg-gray-50/20 gap-3 rounded-xl w-45 h-22">
                <FaBookOpen size={25} />
                <div className="flex flex-col items-center ">
                    <p className="text-xs text-gray-50/60">Livros alugados</p>
                    <p className="text-2xl mx-auto">{rentalsCount ?? '...'}</p>
                </div>
            </div>
        </div>
    )
}