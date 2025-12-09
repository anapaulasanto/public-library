import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SectionDataBook } from "./sectionDataBook";
import { useSaveRental, useFetchRentalsByUser } from "../../../../hooks/rental";
import { ModalSucess } from "../../../ModalSucess";
import { BookCover } from "./bookCover";
import { BookHeader } from "./bookHeader";
import { AuthContext } from "../../../../context/AuthContext";

export const Header = ({ book }) => {
    const { handleSaveRental, isSuccess } = useSaveRental();
    const { user } = useContext(AuthContext);
    const { data: rentals } = useFetchRentalsByUser(user?.id);
    const modalIdSucess = "modal_rental_book_success";
    const modalRef = useRef(null);

    // Verifica se o livro está alugado e se a data de devolução ainda não passou
    const isRented = useMemo(() => {
        if (!rentals || !book) return false;
        
        const activeRental = rentals.find(r => r.bookId === book.id && r.status === 'active');
        
        if (!activeRental) return false;
        
        // Converte returnDate (formato dd/MM/yyyy) para objeto Date
        const [day, month, year] = activeRental.returnDate.split('/');
        const returnDate = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Remove horas para comparar apenas datas
        
        // Retorna true se a data de devolução ainda não passou
        return returnDate >= today;
    }, [rentals, book]);

    const handleRentalClick = (rentalData) => {
        handleSaveRental(rentalData);
    }

    useEffect(() => {
        if (isSuccess) {
            const modal = document.getElementById(modalIdSucess);
            if (modal) {
                modal.showModal();
            }
        }
    }, [isSuccess, modalIdSucess]);

    return (
        <div className="flex justify-center mx-auto gap-10 py-10 w-[85%]" >
            <Link to="/catalog/books">
                <FaArrowAltCircleLeft size={26} />
            </Link>
            <BookCover book={book} />
            <div className="flex flex-col">
                <BookHeader book={book} onRentalClick={handleRentalClick} isRented={isRented} />
                <SectionDataBook book={book} />
            </div>
            <ModalSucess h1="Livro alugado!" p="Você tem um prazo de 15 dias para devolver o livro. Aproveite sua leitura." modalId={modalIdSucess} />
        </div>
    )
};
