import { FaBookOpen, FaCalendar, FaStar } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext/index.jsx";
import { useFetchRentalsByUser } from "../../../../hooks/rental";

export const CardHeader = () => {
    const { user } = useContext(AuthContext);
    const createdAtString = user?.createdAt
    const year = createdAtString ? createdAtString.substring(0,4) : ''
    
    const { data: rentals, isLoading: isLoadingRentals } = useFetchRentalsByUser(user?.id);
    const rentalsCount = isLoadingRentals ? null : (Array.isArray(rentals) ? rentals.length : 0);

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