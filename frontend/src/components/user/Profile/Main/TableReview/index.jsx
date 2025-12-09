import { FaRegCalendar } from "react-icons/fa";
import { useUserReviews } from "../../../../../hooks/user/index.js";
import { Loading } from "../../../../Loading";
import reviewIcon from "../../../../../assets/icons/review-icon.png"
import { StarRating } from "../StarRating";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRightSquareFill } from "react-icons/bs";


export const TableReview = () => {
    const { data: reviews, isError, isLoading } = useUserReviews();
    const navigate = useNavigate();

    if (isLoading) return <Loading />;
    
    if (isError || !reviews || reviews.length === 0) {
        return (
            <section className="flex flex-col items-center justify-center h-full ">
                <img src={reviewIcon} alt="Icone de livro" />
                <p className="font-semibold text-xl mb-3">Nenhuma avaliação ainda</p>
                <p className="text-gray-500">Você ainda não avaliou nenhum livro. Comece a compartilhar suas opiniões sobre suas leituras!</p>
            </section>
        );
    }

    const handleViewBook = (bookId) => {
        navigate(`/catalog/book/${bookId}`);
    };

    return (
        <div className="flex flex-col gap-6 border border-gray-300 bg-neutral-200/50 p-5 rounded-xl mt-10">
            {reviews.map((review) => (
                <div key={`review-${review.id}-${review.bookId}`} className="flex flex-col gap-2 pb-6 border-b border-gray-300 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start">
                        <h1 className="font-semibold text-xl flex-1">{review.bookTitle || 'Título não disponível'}</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <StarRating
                            groupName={`rating-review-${review.id}`}
                            rating={review.nota}
                        />
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <FaRegCalendar />
                            <p>{review.reviewDate || 'Data não disponível'}</p>
                        </div>
                    </div>
                    <p className="text-sm pt-3">{review.comentario}</p>
                </div>
            ))}
        </div>
    );
}