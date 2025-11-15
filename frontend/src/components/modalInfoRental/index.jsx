import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import {  FiUser } from "react-icons/fi";

export const ModalInfoRental = ({ modalId, bookTitle, userName, rentalDate, returnDate }) => {
    return (
        <div>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0 overflow-hidden pb-10">
                    {/* Header */}
                    <div className="flex items-start justify-between px-6 pt-5 pb-2">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-semibold">Informações do Aluguel</h3>
                            <span className="text-sm text-gray-500 mt-1">{bookTitle}</span>
                        </div>
                        <form method="dialog">
                            <button className="btn btn-ghost btn-sm outline-none">
                                <IoCloseOutline size={22} />
                            </button>
                        </form>
                    </div>
                    <div className="px-6">
                        <div className="divider my-0" />
                        {/* Responsável */}
                        <div className="flex items-center gap-4 bg-neutral-100 rounded-xl px-4 py-4 mt-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                                <FiUser className="text-sky-600" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Responsável</span>
                                <span className="text-sm font-medium">{userName}</span>
                            </div>
                        </div>

                        {/* Data do Empréstimo */}
                        <div className="flex items-center gap-4 bg-neutral-100 rounded-xl px-4 py-4 mt-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                                <CiCalendar className="text-sky-600" size={22} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Data do Empréstimo</span>
                                <span className="text-sm font-medium">{rentalDate}</span>
                            </div>
                        </div>

                        {/* Data de Devolução */}
                        <div className="flex items-center gap-4 bg-neutral-100 rounded-xl px-4 py-4 mt-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                                <CiClock2 className="text-sky-600" size={22} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Data de Devolução</span>
                                <span className="text-sm font-medium">{returnDate}</span>
                            </div>
                        </div>

                        {/* Aviso */}
                        <div className="bg-sky-50 text-sky-800 text-xs rounded-xl px-4 py-3 mt-5">
                            Lembre-se de devolver o livro na data indicada para evitar multas
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
