import React from "react";

export const StarRating = ({ rating, groupName }) => {
    return (
        <div className="rating w-22">
            <input type="radio" name={groupName} className="mask mask-star-2 bg-orange-400" aria-label="1 star" defaultChecked={rating === 1} disabled />
            <input type="radio" name={groupName} className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked={rating === 2} disabled />
            <input type="radio" name={groupName} className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked={rating === 3} disabled />
            <input type="radio" name={groupName} className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked={rating === 4} disabled />
            <input type="radio" name={groupName} className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked={rating === 5} disabled />
        </div>
    )
};
