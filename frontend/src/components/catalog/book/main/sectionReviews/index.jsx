import React from "react";
import userImg from "../../../../../assets/user.jpg"
import { StarRating } from "../starRating";
import { Loading } from "../../../../Loading";
import { RiChatAiLine } from "react-icons/ri";

export const SectionReviews = ({ reviews, isLoading, isError }) => {
    if (isLoading) {
        return <div className="my-40"><Loading /></div>;
    }

    if (isError) {
        return (
            <div className="flex flex-col gap-1 bg-neutral-100 mt-5 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow mb-10">
                <p className="text-2xl font-semibold">Avaliações dos leitores</p>
                <p className="text-sm text-gray-600">Seja o primeiro a avaliar este livro</p>
                <div className="flex flex-col items-center text-center mt-10">
                    <RiChatAiLine size={40} color="#2184acff" />
                    <h1 className="font-bold text-xl mb-3">Nenhuma avaliação ainda</h1>
                    <p className="w-[50%] text-sm text-gray-600">Seja o primeiro a compartilhar sua opinião sobre este livro e ajude outros leitores a descobrir excelentes histórias.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full">
            <div className="flex flex-col gap-10 bg-neutral-100 mt-5 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow mb-10">
                <p className="text-2xl font-semibold">Avaliações dos leitores</p>
                {reviews.map((review) => (
                    <div key={review.id} className="flex gap-3 border-b border-gray-200 pb-4">
                        <img
                            src={userImg}
                            alt="Imagem de boneco de usuario"
                            className="rounded-full w-10 shadow-lg shadow-blue-400 self-start"
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold">{review.reviewerName}</p>
                            <div className="flex gap-2 items-center">
                                <StarRating
                                    props="w-18"
                                    rate={review.nota}
                                    ratingName={`rating-review-${review.id}`}
                                />
                                <p className="text-xs text-gray-500">{review.reviewDate}</p>
                            </div>
                            <p className="text-gray-600 font-semibold mt-2">{review.comentario}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
