import React from "react";

import { StarRating } from "../../user/Profile/Main/StarRating";
import { LuStar, LuUserRoundPen } from "react-icons/lu";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiFillStar, AiOutlineBorderlessTable } from "react-icons/ai";
import { Header } from "./header";
import { Main } from "./main";

export const Book = () => {

    return (
        <div className="flex flex-col w-[95%]" >
            <Header />
            <Main />
        </div>
    )
};
