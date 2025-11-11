import React from "react";
import { StarRating } from "../starRating";
import { BarRating } from "../barRating";


export const SectionCountReviews = () => {
    return (
        <div className="bg-neutral-100 mt-20 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow">
            <p className="text-2xl font-semibold">Visão Geral das Avaliações</p>
            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-2 ml-10 text-sm text-zinc-600 mb-3 w-1/2">
                    <p className="font-bold text-black ml-8 pt-6 text-5xl">4.8</p>
                    <StarRating />
                    <p className=" ml-6">20 avaliações</p>
                </div>
                <BarRating />
            </div>
        </div>
    )
};
