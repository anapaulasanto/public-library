import React, { memo } from "react";
import { useBooksApi } from "../../../hooks/book/api";
import { CardBookApi } from "./bookCardApi";
import { InputSearch } from "../Main/InputSearch";
import { Loading } from "../../Loading";

export const MainBooksApi = memo(() => {
    const { data: books } = useBooksApi();
    if (!books) return <div className="w-full text-center py-10"><Loading /></div>;

    return (
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:flex-wrap my-10 hover:cursor-pointer w-full">
            <InputSearch />
            {books.map((book) => (
                <CardBookApi key={book.id} book={book} />
            ))}
        </div>
    );
});
