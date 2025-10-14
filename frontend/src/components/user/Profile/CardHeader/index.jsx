import { FaBookOpen, FaCalendar, FaStar } from "react-icons/fa";

export function CardHeader() {
    return (
        <div className="flex flex-col mx-auto gap-4 lg:flex-row">
            <div className="flex items-center justify-center p-2 px-4 bg-gray-50/20 gap-3 rounded-xl w-45 h-22">
                <FaCalendar size={25} />
                <div className="flex flex-col items-center ">
                    <p className="text-xs text-gray-50/60">Membro desde</p>
                    <p className="text-2xl mx-auto">2024</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-2 px-4 bg-gray-50/20 gap-3 rounded-xl w-45 h-22">
                <FaStar size={25} />
                <div className="flex flex-col items-center ">
                    <p className="text-xs text-gray-50/60">Avaliações</p>
                    <p className="text-2xl mx-auto">20</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-2 px-4 bg-gray-50/20 gap-3 rounded-xl w-45 h-22">
                <FaBookOpen size={25} />
                <div className="flex flex-col items-center ">
                    <p className="text-xs text-gray-50/60">Livros alugados</p>
                    <p className="text-2xl mx-auto">12</p>
                </div>
            </div>
        </div>
    )
}