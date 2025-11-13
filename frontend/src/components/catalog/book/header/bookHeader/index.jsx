import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthContext";
import { useFetchRentalsByUser } from "../../../../../hooks/rental";

export const BookHeader = ({ book, onRentalClick, isRented, rentalData }) => {
    const { isLogged, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { data: rentals } = useFetchRentalsByUser(user?.id);

    console.log("alugueis do usuario", rentals);
    

    const handleToRental = () => {
        if (!isLogged) {
            navigate(`/auth/user/login?redirect=${window.location.pathname}`);
            return;
        }

        const rentalData = {
            rentalDate: new Date().toLocaleDateString('pt-BR'),
            returnDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR'),
            status: 'active',
            bookId: book.id,
            userId: user.id
        };

        onRentalClick(rentalData);
    }

    return (
        <div className="flex flex-col gap-1">
            <h2 className="card-title text-[1.8rem] ">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <div className="flex justify-between items-center">
                <p className="bg-gray-300 px-3 py-1 w-fit font-semibold rounded-xl text-xs">{book.categoryName}</p>
                <div>
                    <button
                        onClick={handleToRental}
                        className={`btn bg-sky-600 text-white rounded-2xl px-8 hover:bg-sky-700 duration-150 ${isRented ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={isRented}
                    >
                        {isRented ? "Alugado" : "Alugar"}
                    </button>
                </div>
            </div>
            <div className="w-150 pt-10">
                <h1 className="font-semibold">Descrição</h1>
                <p className="text-sm pt-2 text-gray-700">Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, se mudou para Boston e abriu a própria loja. Então, quando se sente atraída por um lindo neurocirurgião chamado Ryle Kincaid, tudo parece perfeito demais para ser verdade.
                </p>
            </div>
        </div>
    )
};
