import React from "react";
import { AiFillStar } from "react-icons/ai";

export const BarRating = ({ ratingDistribution = {}, totalReviews = 0 }) => {
    const ratings = [5, 4, 3, 2, 1];

    return (
        <div className="flex flex-col gap-4">
            {ratings.map((rating) => {
                const count = ratingDistribution[rating] || 0;
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                return (
                    <div key={rating} className="flex items-center gap-2">
                        <div className="flex items-center">
                            <p className="text-sm">{rating}</p>
                            <AiFillStar />
                        </div>
                        <progress 
                            className="progress progress-info w-56" 
                            value={percentage} 
                            max="100"
                        ></progress>
                        <p className="text-gray-600 text-sm">{count}</p>
                    </div>
                );
            })}
        </div>
    )
};
