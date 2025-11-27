import React from "react";

export const InfoCard = ({ title, count, icon, borderColor, textColor }) => {
    return (
        <div className={`bg-white w-56 p-4 px-6 mt-10 border-l-4 ${borderColor} rounded-xl space-y-3 shadow-sm`}>
            <div className="flex gap-6 items-center w-full">
                <p className="font-semibold">{title}</p>
                {icon}
            </div>
            <p className={`font-bold text-3xl pb-2 ${textColor}`}>{count}</p>
        </div>
    );
};

