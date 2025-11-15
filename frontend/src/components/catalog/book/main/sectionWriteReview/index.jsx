import React, { useContext, useMemo } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { useFetchRentalsByUser } from "../../../../../hooks/rental";

export const SectionWriteReview = ({ book }) => {
    const { user, isLogged } = useContext(AuthContext);
    const { data: rentals } = useFetchRentalsByUser(user?.id);

    const hasRentedBook = useMemo(() => {
        if (!rentals || !book) return false;
        
        return rentals.some(r => r.bookId === book.id && r.status === 'active');
    }, [rentals, book]);

    const isDisabled = user?.role === "ADMIN" || !hasRentedBook;

    return (
        <div className={`flex flex-col gap-2 bg-neutral-100  mt-5 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow ${!isLogged || user?.role === "ADMIN" ? "hidden" : ""}`}>
            <p className="text-2xl font-semibold">Escreva sua Avaliação</p>
            {!hasRentedBook && isLogged && user?.role !== "ADMIN" && (
                <p className="text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg mt-2">
                    Você precisa alugar este livro para avaliar.
                </p>
            )}
            <p className="font-semibold text-sm mt-4">Sua nota para este livro</p>
            <div className="rating self-start">
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" disabled={isDisabled} />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" disabled={isDisabled} />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" disabled={isDisabled} />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" disabled={isDisabled} />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" disabled={isDisabled} />
            </div>
            <p className="font-semibold pt-10">Seu comentário</p>
            <div>
                <form>
                    <textarea
                        className={`textarea w-full bg-neutral-100 border border-gray-300 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                        placeholder="Compartilhe sua opinião sobre esse livro..."
                        disabled={isDisabled}>
                    </textarea>
                    <button
                        className={`btn mt-8 bg-sky-600 px-4 text-white rounded-lg hover:cursor-pointer hover:bg-sky-600 duration-150 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                        type="submit"
                        disabled={isDisabled}
                    >Publicar
                    </button>
                </form>
            </div>
        </div>
    )
};
