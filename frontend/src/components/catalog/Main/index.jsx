import React, { useState } from "react";
import { InputSearch } from "./InputSearch";
import { CardBook } from "./CardBookCatalog";

export const MainBooks = () => {
    const [searchParams, setSearchParams] = useState({ text: '', type: 'all' });

    const handleSearch = (params) => {
        setSearchParams(params);
    };

    return (
        <main className="py-3">
            <InputSearch onSearch={handleSearch} />
            <div className="flex 2xl:w-[88%] mx-auto">
                <CardBook searchParams={searchParams} />
            </div>
        </main>
    )
};
