import React, { memo, useMemo } from "react";
import { books } from "../../../data/cardBook";
import { CardBookItem } from "./CardBookItem";

export const CardsBook = memo(() => {
    const renderedBooks = useMemo(() => (
        books.map((book) => (
            <CardBookItem key={book.id} book={book} />
        ))
    ), []);

    return (
        <div>
            {renderedBooks}
        </div>
    );
});