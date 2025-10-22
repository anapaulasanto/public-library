import React from "react";
import { CiFilter } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { CategoriesSearch } from "../CategoriesSearchAside";
import { Filter } from "../FilterAside";

export const Aside = () => {
    return (
        <aside className="bg-neutral-200 shadow border border-neutral-300 mt-10 p-5 rounded-lg h-fit w-[30%]">
            <header className="flex items-center text-lg font-semibold gap-1">
                <CiFilter />
                <p>Filtros de busca</p>
            </header>
            <CategoriesSearch />
            <Filter />
        </aside>
    )
};
