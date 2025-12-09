import React, { memo, useMemo } from "react";
import { CardBookItem } from "./CardBookItem";
import { useBooksAdmin } from "../../../hooks/book/index.js";
import { Loading } from "../../Loading/index.jsx";

export const CardsBook = memo(() => {
    const { data: books, isLoading, isError } = useBooksAdmin();

    const renderedBooks = useMemo(() => {
        if (!books) return null;
        const limitedBooks = books.slice(0, 4);
        return limitedBooks.map((book) => (
            <CardBookItem key={book.id} book={book} />
        ));
    }, [books]);

    if (isLoading) return <Loading />;
    if (isError) return <div className="text-center text-red-500">Erro ao carregar livros.</div>;

    return (
        <div className="flex m-auto gap-4 mt-10">
            {renderedBooks}
        </div>
    );
});