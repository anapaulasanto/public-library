import React, { memo, useCallback, useMemo, useState } from "react";
import { useBooksApi } from "../../../hooks/book/api";
import { CardBookApi } from "./bookCardApi";
import { InputSearch } from "../Main/InputSearch";
import { Loading } from "../../Loading";

export const MainBooksApi = memo(() => {
    const [query, setQuery] = useState({ text: "bestseller", type: "all" });
    const { data: books, isFetching } = useBooksApi(query);

    const handleSearch = useCallback((newQuery) => {
        setQuery(newQuery);
    }, []);

    const renderedBooks = useMemo(() => (
        books && books.map((book) => (
            <CardBookApi key={book.id} book={book} />
        ))
    ), [books]); 

    return (
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:flex-wrap my-10 hover:cursor-pointer w-full">
            <InputSearch onSearch={handleSearch} />
            {isFetching && <div className="w-full text-center py-10"><Loading /></div>}
            {renderedBooks}
        </div>
    );
});
