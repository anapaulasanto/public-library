import React from "react";

export const Loading = () => {
    return (
        <div className="flex justify-center items-center gap-2 w-full h-40">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-xl"></span>
        </div>
    )
};
