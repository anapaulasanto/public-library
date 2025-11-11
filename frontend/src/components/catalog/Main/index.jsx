import React from "react";
import { InputSearch } from "./InputSearch";
import { CardBook } from "./CardBookCatalog";
import { Aside } from "./Aside";
import { Pagination } from "./Pagination";

export const MainBooks = () => {
    return (
        <main className="py-3">
            <InputSearch />
            <div className="flex w-[95%] mx-auto">
                {/* <Aside /> */}
                <CardBook />
            </div>
            <Pagination />
        </main>
    )
};
