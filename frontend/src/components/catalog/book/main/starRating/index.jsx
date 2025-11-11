import React from "react";

export const StarRating = ({ props }) => {
    return (
        <div className={`rating self-start ${props}`}>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="1 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="2 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="3 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="4 star" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="5 star" />
        </div>
    )
};
