import React from "react";
import userImg from "../../../../../assets/user.jpg"
import { StarRating } from "../starRating";

export const SectionReviews = () => {
    return (
        <div className="flex flex-col gap-10 bg-neutral-100 mt-5 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow mb-10">
            <p className="text-2xl font-semibold">Avaliações dos leitores</p>
            <div className="flex gap-3">
                <img
                    src={userImg}
                    alt="Imagem de boneco de usuario"
                    className="rounded-full w-10 shadow-lg shadow-blue-400 self-start"
                />
                <div className="flex flex-col">
                    <p className="font-semibold">Alana Silva</p>
                    <div className="flex gap-2 items-center">
                        <StarRating props="w-18" />
                        <p className="text-xs text-gray-500">2025-10-10</p>
                    </div>
                    <p className="text-gray-600 font-semibold mt-2">Uma obra-prima da literatura brasileira. A escrita de Machado é simplesmente magistral. A forma como ele constrói a narrativa e deixa o leitor questionar a veracidade dos fatos é brilhante.</p>
                </div>
            </div>
            <div className="flex gap-3">
                <img
                    src={userImg}
                    alt="Imagem de boneco de usuario"
                    className="rounded-full w-10 shadow-lg shadow-blue-400 self-start"
                />
                <div className="flex flex-col">
                    <p className="font-semibold">Alana Silva</p>
                    <div className="flex gap-2 items-center">
                        <StarRating props="w-18" />
                        <p className="text-xs text-gray-500">2025-10-10</p>
                    </div>
                    <p className="text-gray-600 font-semibold mt-2">Uma obra-prima da literatura brasileira. A escrita de Machado é simplesmente magistral. A forma como ele constrói a narrativa e deixa o leitor questionar a veracidade dos fatos é brilhante.</p>
                </div>
            </div>
        </div>
    )
};
