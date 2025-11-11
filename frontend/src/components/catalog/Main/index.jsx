import React from "react";
import { InputSearch } from "./InputSearch";
import { CardBook } from "./CardBookCatalog";
import { Aside } from "./Aside";
import { Pagination } from "./Pagination";

export const Main = () => {
    return (
        <main className="py-3">
            <header className="text-center">
                <h1 className="text-5xl font-bold text-gradient py-4 tracking-wider">Catálogo de livros</h1>
                <p className="text-gray-500">Explore nossa coleção local e milhões de títulos do Google Books</p>
            </header>
            <InputSearch />
            <div className="flex w-[95%] mx-auto">
                <Aside />
                <CardBook />
            </div>
            <Pagination />
        </main>
    )
};
