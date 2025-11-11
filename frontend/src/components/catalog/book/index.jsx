import React from "react";
import { Header } from "./header";
import { Main } from "./main";

export const Book = ({ book }) => {

    return (
        <div className="flex flex-col w-[95%]" >
            <Header book={book} />
            <Main book={book} />
        </div>
    )
};
