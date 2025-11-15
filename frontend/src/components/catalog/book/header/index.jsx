import React, { useEffect, useState, useContext } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SectionDataBook } from "./sectionDataBook";
import { useSaveRental } from "../../../../hooks/rental";
import { ModalSucess } from "../../../ModalSucess";
import { BookCover } from "./bookCover";
import { BookHeader } from "./bookHeader";
import { AuthContext } from "../../../../context/AuthContext";

export const Header = ({ book }) => {
    const { handleSaveRental, isSuccess, data } = useSaveRental()
    const { user } = useContext(AuthContext);
    const modalIdSucess = "modal_rental_book_success"
    const [isRented, setIsRented] = useState(false);

    const handleRentalClick = (rentalData) => {
        handleSaveRental(rentalData);
    }

    // Carrega estado inicial de aluguel do localStorage quando usuário e livro estão disponíveis
    useEffect(() => {
        if (user && book) {
            const key = `rental_${user.id}_${book.id}`;
            if (localStorage.getItem(key) === 'true') {
                setIsRented(true);
            }
        }
    }, [user, book]);

    // Após sucesso da locação, persiste informação e exibe modal
    useEffect(() => {
        if (isSuccess && user && book) {
            const modalSuccess = document.getElementById(modalIdSucess);
            modalSuccess?.showModal();
            
            const key = `rental_${user.id}_${book.id}`;
            localStorage.setItem(key, 'true');
            setIsRented(true);
        }
    }, [isSuccess, user, book]);

    return (
        <div className="flex justify-center mx-auto gap-10 py-10 w-[85%]" >
            <Link to="/catalog/books">
                <FaArrowAltCircleLeft size={26} />
            </Link>
            <BookCover />
            <div className="flex flex-col">
                <BookHeader book={book} onRentalClick={handleRentalClick} isRented={isRented} />
                <SectionDataBook book={book} />
            </div>
            <ModalSucess h1="Livro alugado!" p="Você tem um prazo de 15 dias para devolver o livro. Aproveite sua leitura." modalId={modalIdSucess} />
        </div>
    )
};
