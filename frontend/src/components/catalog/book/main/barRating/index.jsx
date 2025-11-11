import React from "react";
import { AiFillStar } from "react-icons/ai";

export const BarRating = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <p className="text-sm">1</p>
                    <AiFillStar />
                </div>
                <progress className="progress progress-info w-56" value="10" max="100"></progress>
                <p className="text-gray-600 text-sm">1</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <p className="text-sm">2</p>
                    <AiFillStar />
                </div>
                <progress className="progress progress-info w-56" value="20" max="100"></progress>
                <p className="text-gray-600 text-sm">2</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <p className="text-sm">3</p>
                    <AiFillStar />
                </div>
                <progress className="progress progress-info w-56" value="30" max="100"></progress>
                <p className="text-gray-600 text-sm">4</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <p className="text-sm">4</p>
                    <AiFillStar />
                </div>
                <progress className="progress progress-info w-56" value="50" max="100"></progress>
                <p className="text-gray-600 text-sm">6</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <p className="text-sm">5</p>
                    <AiFillStar />
                </div>
                <progress className="progress progress-info w-56" value="70" max="100"></progress>
                <p className="text-gray-600 text-sm">7</p>
            </div>

        </div>
    )
};
