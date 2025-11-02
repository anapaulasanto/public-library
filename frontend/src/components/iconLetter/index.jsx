import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const IconLetter = () => {
    const { user } = useContext(AuthContext);
    const userName = user?.name
    const letter = userName.substring(0, 1);

    return (
        <p className="bg-blue-300 w-9 h-9 flex items-center justify-center text-center text-2xl rounded-full font-bold text-white">{letter}</p>
    )
};
