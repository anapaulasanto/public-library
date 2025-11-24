import { FaRegCalendar } from "react-icons/fa";
import { useUserReviews } from "../../../../../hooks/user/index.js";
import { Loading } from "../../../../Loading";
import reviewIcon from "../../../../../assets/icons/review-icon.png"
import { StarRating } from "../StarRating";
import { useMemo } from "react";


export const TableReview = () => {
    const { data: reviews, isError, isLoading } = useUserReviews();

    if (isLoading) return <Loading />;
    if (isError) return (
        <section className="flex flex-col items-center justify-center h-full ">
            <img src={reviewIcon} alt="Icone de livro" />
            <p className="font-semibold text-xl mb-3">Nenhuma avaliação ainda</p>
            <p className="text-gray-500">Você ainda não avaliou nenhum livro. Comece a compartilhar suas opiniões sobre suas leituras!</p>
        </section>
    );

    const renderedReviews = useMemo(() => (
        reviews?.map((review) => (
            <div key={review.id} className="flex flex-col gap-2">
                <h1 className="font-semibold text-xl">Perdida (Vol. 1): Um amor que ultrapassa as barreiras do tempo</h1>
                <div className="flex items-center gap-10">
                    <StarRating
                        groupName={`rating-review-${review.id}`}
                        rating={review.nota}
                    />
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <FaRegCalendar />
                        <p>19 de outubro de 2025</p>
                    </div>
                </div>
                <p className="text-sm pt-3">{review.comentario}</p>
            </div>
        ))
    ), [reviews]);

    return (
        <div className="flex flex-col gap-3 border border-gray-300 bg-neutral-200/50 p-5 rounded-xl mt-10">
            {renderedReviews}
        </div>
    );
}