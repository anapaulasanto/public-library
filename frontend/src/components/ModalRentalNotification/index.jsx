import React from "react";
import { IoMdTime } from "react-icons/io";

export const ModalRentalNotification = ({ rentals, modalId }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        
        const dateOnly = dateStr.split(' ')[0];
        
        if (dateOnly.includes('/')) {
            return dateOnly;
        } else {
            // Converte yyyy-MM-dd para dd/MM/yyyy
            const [year, month, day] = dateOnly.split('-');
            return `${day}/${month}/${year}`;
        }
    };

    const getDaysUntilReturn = (dateStr) => {
        if (!dateStr) return 0;
        
        const dateOnly = dateStr.split(' ')[0];
        let returnDate;
        
        if (dateOnly.includes('/')) {
            const [day, month, year] = dateOnly.split('/');
            returnDate = new Date(year, month - 1, day);
        } else {
            returnDate = new Date(dateOnly);
        }
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        returnDate.setHours(0, 0, 0, 0);
        
        const diffTime = returnDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays;
    };

    return (
        <div>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-3xl">
                    <div className="flex items-center gap-3 mb-10">
                        <IoMdTime size={40} color="#f59e0b" />
                        <h3 className="font-bold text-2xl text-gray-600">Lembrete de Devolução</h3>
                    </div>
                    
                    <div className="space-y-4">
                        {rentals && rentals.length > 0 ? (
                            rentals.map((rental, index) => {
                                const daysLeft = getDaysUntilReturn(rental.returnDate);
                                return (
                                    <div 
                                        key={index} 
                                        className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
                                    >
                                        <div className="flex justify-between items-start mb-2 gap-3">
                                            <h4 className="font-semibold text-lg text-gray-800">
                                                {rental?.bookTitle || 'Livro'}
                                            </h4>
                                            <span className={`badge badge-outline badge-lg ${
                                                daysLeft === 0 ? 'badge-error' :
                                                daysLeft === 1 ? 'badge-warning' :
                                                'badge-info'
                                            }`}>
                                                {daysLeft === 0 ? 'Hoje!' :
                                                 daysLeft === 1 ? 'Amanhã' :
                                                 `${daysLeft} dias`}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">
                                            Data de devolução: <span className="font-semibold">
                                                {formatDate(rental.returnDate)}
                                            </span>
                                        </p>
                                        {daysLeft <= 1 && (
                                            <p className="text-sm text-red-600 mt-2 font-medium">
                                                ⚠️ Não se esqueça de devolver o livro para evitar multas!
                                            </p>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-gray-500 text-center py-4">
                                Nenhuma devolução próxima
                            </p>
                        )}
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-sky-700 text-white rounded-lg">
                                Entendi
                            </button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>fechar</button>
                </form>
            </dialog>
        </div>
    );
};
