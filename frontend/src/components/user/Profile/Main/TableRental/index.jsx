import imgCard from "../../../../../assets/bg-auth.jfif";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { useUserRentals } from "../../../../../hooks/user/index.js";
import { Loading } from "../../../../Loading/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import bookIcon from "../../../../../assets/icons/book-icon.png";
import { nameToSlug } from "../../../../../utils/index.js";
import { useCallback, useMemo, useState } from "react";
import { ModalInfoRental } from "../../../../modalInfoRental";

export const TableRental = () => {
    const { data: rental, isLoading, isError } = useUserRentals();
    const navigate = useNavigate();
    const [selectedRental, setSelectedRental] = useState(null);
    const modalId = 'modal_info_rental';

    const onClickRental = useCallback((bookTitle, bookId) => {
        navigate(`/catalog/book/${nameToSlug(bookTitle)}/${bookId}`, { state: { bookId } });
    }, [navigate]);

    const openRentalInfo = useCallback((r) => {
        setSelectedRental(r);
        const dialog = document.getElementById(modalId);
        dialog?.showModal();
    }, [modalId]);

    const isRentalActive = useCallback((returnDate) => {
        if (!returnDate) return false;
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const [day, month, year] = returnDate.split('/');
        const returnDateObj = new Date(year, month - 1, day);
        returnDateObj.setHours(0, 0, 0, 0);
        
        return returnDateObj > today;
    }, []);

    const renderedRentals = useMemo(() => {
        if (!rental) return null;
        
        // Ordenar: aluguéis ativos primeiro, depois inativos
        const sortedRentals = [...rental].sort((a, b) => {
            const isActiveA = isRentalActive(a.returnDate);
            const isActiveB = isRentalActive(b.returnDate);
            
            if (isActiveA && !isActiveB) return -1;
            if (!isActiveA && isActiveB) return 1;
            return 0;
        });

        return sortedRentals.map((r) => {
            const isActive = isRentalActive(r.returnDate);
            
            return (
                <div
                    key={r.bookId}
                    className={`flex gap-3 h-50 border border-gray-200 rounded-xl ${
                        isActive 
                            ? 'hover:shadow-2xl hover:h-51 hover:duration-150 ease-out' 
                            : 'opacity-60 bg-gray-100'
                    }`}
                >
                    <img
                        src={r.bookImg || imgCard}
                        alt=""
                        className={`w-1/5 rounded-l-xl ${isActive ? 'hover:cursor-pointer' : 'grayscale'}`}
                        onClick={() => isActive && onClickRental(r.bookTitle, r.bookId)}
                    />
                    <div className="flex flex-col justify-between flex-1 py-2 pr-2">
                        <div className="flex items-start justify-between">
                            <h1
                                className={`font-semibold text-xl pt-2 ${isActive ? 'hover:cursor-pointer' : ''}`}
                                onClick={() => isActive && onClickRental(r.bookTitle, r.bookId)}
                            >
                                {r.bookTitle}
                            </h1>
                        </div>
                        <div className="flex flex-col items-start gap-2 w-full mt-2">
                            <div className={`flex items-center gap-2 ${
                                isActive ? 'bg-green-500' : 'bg-red-500'
                            } text-white rounded-xl py-1 px-4`}>
                                <FaRegClock size={12} />
                                <p className="text-xs">
                                    {isActive ? `Entrega: ${r.returnDate}` : `Aluguel expirado: ${r.returnDate}`}
                                </p>
                            </div>
                            <div className="flex gap-1 items-center text-xs text-gray-500">
                                <FaRegCalendarAlt size={12} />
                                <p>Data do aluguel: {r.rentalDate}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-sm rounded-lg"
                            onClick={() => { openRentalInfo(r) }}
                        >
                            Visualizar aluguel
                        </button>
                    </div>
                </div>
            );
        });
    }, [rental, onClickRental, openRentalInfo, isRentalActive]);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (isError) {
        return (
            <section className="flex flex-col items-center justify-center h-full ">
                <img src={bookIcon} alt="Icone de livro" />
                <p className="font-semibold text-xl mb-3">Nenhum aluguel ativo</p>
                <p className="text-gray-500">Você ainda não possui livros alugados no momento.</p>
                <Link
                    className="bg-gradient text-white font-semibold shadow rounded-xl w-full h-10 flex items-center mx-auto justify-center mt-10 gap-2 text-sm hover:cursor-pointer hover:shadow-xl lg:w-1/7"
                    to="/catalog/books"
                >
                    Alugar um livro
                </Link>
            </section>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 pb-12 gap-10 mt-10 lg:grid-cols-2 max-h-[500px] overflow-y-auto">
                {renderedRentals}
            </div>
            <ModalInfoRental
                modalId={modalId}
                bookTitle={selectedRental?.bookTitle}
                userName={selectedRental?.userName || 'Você'}
                rentalDate={selectedRental?.rentalDate}
                returnDate={selectedRental?.returnDate}
            />
        </>
    );
}