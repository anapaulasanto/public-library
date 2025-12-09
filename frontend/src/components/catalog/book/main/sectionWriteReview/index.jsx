import React, { useContext, useMemo, useState } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { useFetchRentalsByUser } from "../../../../../hooks/rental";
import { useSaveReview } from "../../../../../hooks/review";

export const SectionWriteReview = ({ book }) => {
    const { user, isLogged } = useContext(AuthContext);
    const { data: rentals } = useFetchRentalsByUser(user?.id);
    const { handleSaveReview } = useSaveReview();
    
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const hasRentedBook = useMemo(() => {
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

    const isDisabled = user?.role === "ADMIN" || !hasRentedBook;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!rating) {
            alert("Por favor, selecione uma nota");
            return;
        }

        try {
            const reviewData = {
                nota: rating,
                comentario: comment,
                bookId: book.id,
                userId: user.id
            };

            await handleSaveReview(reviewData);
            
            // Limpar formulário
            setRating(0);
            setComment("");
            
            alert("Avaliação publicada com sucesso!");
        } catch (error) {
            console.error("Erro ao publicar avaliação:", error);
            alert("Erro ao publicar avaliação. Tente novamente.");
        }
    };

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
                <input 
                    type="radio" 
                    name="rate-2" 
                    className="mask mask-star-2 bg-orange-400" 
                    aria-label="1 star" 
                    disabled={isDisabled}
                    checked={rating === 1}
                    onChange={() => setRating(1)}
                />
                <input 
                    type="radio" 
                    name="rate-2" 
                    className="mask mask-star-2 bg-orange-400" 
                    aria-label="2 star" 
                    disabled={isDisabled}
                    checked={rating === 2}
                    onChange={() => setRating(2)}
                />
                <input 
                    type="radio" 
                    name="rate-2" 
                    className="mask mask-star-2 bg-orange-400" 
                    aria-label="3 star" 
                    disabled={isDisabled}
                    checked={rating === 3}
                    onChange={() => setRating(3)}
                />
                <input 
                    type="radio" 
                    name="rate-2" 
                    className="mask mask-star-2 bg-orange-400" 
                    aria-label="4 star" 
                    disabled={isDisabled}
                    checked={rating === 4}
                    onChange={() => setRating(4)}
                />
                <input 
                    type="radio" 
                    name="rate-2" 
                    className="mask mask-star-2 bg-orange-400" 
                    aria-label="5 star" 
                    disabled={isDisabled}
                    checked={rating === 5}
                    onChange={() => setRating(5)}
                />
            </div>
            <p className="font-semibold pt-10">Seu comentário</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className={`textarea w-full bg-neutral-100 border border-gray-300 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                        placeholder="Compartilhe sua opinião sobre esse livro..."
                        disabled={isDisabled}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    >
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
