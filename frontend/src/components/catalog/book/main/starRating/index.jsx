import React from "react";

export const StarRating = ({ props, rate, ratingName }) => {
    return (
        <div className={`rating self-start ${props}`}>
            <input type="radio" name={ratingName} className="mask mask-star-2 bg-sky-600" aria-label="1 star"defaultChecked={rate === 1} disabled />
            <input type="radio" name={ratingName} className="mask mask-star-2 bg-sky-600" aria-label="2 star" defaultChecked={rate === 2} disabled />
            <input type="radio" name={ratingName} className="mask mask-star-2 bg-sky-600" aria-label="3 star" defaultChecked={rate === 3} disabled />
            <input type="radio" name={ratingName} className="mask mask-star-2 bg-sky-600" aria-label="4 star" defaultChecked={rate === 4} disabled />
            <input type="radio" name={ratingName} className="mask mask-star-2 bg-sky-600" aria-label="5 star" defaultChecked={rate === 5} disabled />
        </div>
    )
};
