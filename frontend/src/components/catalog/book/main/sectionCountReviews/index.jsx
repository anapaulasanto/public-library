import React from "react";
import { StarRating } from "../starRating";
import { BarRating } from "../barRating";
import { Loading } from "../../../../Loading";


export const SectionCountReviews = ({ averageRating, reviewCount, reviews, isLoading, isError }) => {

    if (isLoading) {
        return <div>{null}</div>;
    }

    if (isError) {
        return <div className="text-center text-zinc-500">{null}</div>;
    }

    // Calcular distribuição de ratings
    const ratingDistribution = reviews && reviews.length > 0 ? reviews.reduce((acc, review) => {
        const rating = review.nota || review.rating;
        acc[rating] = (acc[rating] || 0) + 1;
        return acc;
    }, {}) : {};

    const totalReviews = reviewCount || 0;
    const displayRating = averageRating || 0;

    return (
        <div className="bg-neutral-100 mt-20 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow">
            <p className="text-2xl font-semibold">Visão Geral das Avaliações</p>
            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-2 ml-10 text-sm text-zinc-600 mb-3 w-1/2">
                    <p className="font-bold text-black ml-8 pt-6 text-5xl">
                        {displayRating > 0 ? displayRating.toFixed(1) : 'N/A'}
                    </p>
                    <StarRating rate={Math.round(displayRating)} />
                    <p className="ml-6">
                        {totalReviews} {totalReviews === 1 ? 'avaliação' : 'avaliações'}
                    </p>
                </div>
                <BarRating ratingDistribution={ratingDistribution} totalReviews={totalReviews} />
            </div>
        </div>
    )
};
