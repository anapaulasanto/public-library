import React from "react";

export const StarRating = () => {
    return (
        <div className="flex flex-col gap-2 ml-10 text-sm text-zinc-600 mb-3 w-1/2">
            <p className="font-bold text-black ml-8 pt-6 text-5xl">4.8</p>
            <div className="rating self-start">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="1 star" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="2 star" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="3 star" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="4 star" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="5 star" />
            </div>
            <p className=" ml-6">20 avaliações</p>
        </div>
    )
};
