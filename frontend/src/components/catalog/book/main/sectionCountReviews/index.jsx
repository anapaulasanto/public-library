import React from "react";
import { AiFillStar } from "react-icons/ai";
import { StarRating } from "../starRating";
import { BarRating } from "../barRating";


export const SectionCountReviews = () => {
    return (
        <div className="bg-neutral-200/50 mt-20 p-4 border border-neutral-300 rounded-xl w-[80%] mx-auto">
            <p className="text-2xl font-semibold">Visão Geral das Avaliações</p>
            <div className="flex items-center justify-center">
                <StarRating />
                <BarRating />
            </div>
        </div>
    )
};
