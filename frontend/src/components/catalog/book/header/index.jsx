import React, { useEffect, useState, useContext, useRef } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SectionDataBook } from "./sectionDataBook";
import { useSaveRental } from "../../../../hooks/rental";
import { ModalSucess } from "../../../ModalSucess";
import { BookCover } from "./bookCover";
import { BookHeader } from "./bookHeader";
import { AuthContext } from "../../../../context/AuthContext";

export const Header = ({ book }) => {
    const { handleSaveRental, isSuccess} = useSaveRental()
    const { user } = useContext(AuthContext);
    const modalIdSucess = "modal_rental_book_success"
    const [isRented, setIsRented] = useState(false);
    const modalRef = useRef(null);

    const handleRentalClick = (rentalData) => {
        handleSaveRental(rentalData);
    }

    useEffect(() => {
        if (isSuccess) {
            setIsRented(true);
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
