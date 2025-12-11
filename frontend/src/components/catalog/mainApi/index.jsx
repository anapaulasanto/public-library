import React, { memo, useCallback, useMemo, useState } from "react";
import { useBooksApi } from "../../../hooks/book/api";
import { CardBookApi } from "./bookCardApi";
import { InputSearch } from "../Main/InputSearch";
import { Loading } from "../../Loading";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const MainBooksApi = memo(() => {
    const [query, setQuery] = useState({ text: "bestseller", type: "all", page: 1 });
    const { data, isFetching } = useBooksApi(query);

    const books = data?.items || [];
    const totalItems = data?.totalItems || 0;
    const totalPages = Math.ceil(totalItems / 8);

    const handleSearch = useCallback((newQuery) => {
        setQuery({ ...newQuery, page: 1 });
    }, []);

    const handlePageChange = useCallback((newPage) => {
        setQuery(prev => ({ ...prev, page: newPage }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const renderedBooks = useMemo(() => (
        books && books.map((book) => (
            <CardBookApi key={book.id} book={book} />
        ))
    ), [books]); 

    const paginationButtons = useMemo(() => {
        const buttons = [];
        const maxButtons = 5;
        let startPage = Math.max(1, query.page - Math.floor(maxButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxButtons - 1);

        if (endPage - startPage < maxButtons - 1) {
            startPage = Math.max(1, endPage - maxButtons + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        query.page === i
                            ? 'bg-sky-700 text-white shadow-lg scale-110'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return buttons;
    }, [query.page, totalPages, handlePageChange]);

    return (
        <div className="flex flex-col items-center justify-center gap-6 my-10 w-full">
            <InputSearch onSearch={handleSearch} />
            
            {isFetching ? (
                <div className="w-full text-center py-10"><Loading /></div>
            ) : (
                <>
                    {books.length > 0 ? (
                        <>
                            <div className="flex flex-wrap gap-6 justify-center w-full">
                                {renderedBooks}
                            </div>

                            {/* Informações e Paginação */}
                            {totalPages > 1 && (
                                <div className="flex flex-col items-center gap-4 mt-8 w-full">
                                    <p className="text-sm text-gray-600">
                                        Mostrando {((query.page - 1) * 8) + 1} - {Math.min(query.page * 8, totalItems)} de {totalItems.toLocaleString()} resultados
                                    </p>
                                    
                                    <div className="flex items-center gap-2">
                                        {/* Botão Primeira Página */}
                                        <button
                                            onClick={() => handlePageChange(1)}
                                            disabled={query.page === 1}
                                            className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                            title="Primeira página"
                                        >
                                            «
                                        </button>

                                        {/* Botão Anterior */}
                                        <button
                                            onClick={() => handlePageChange(query.page - 1)}
                                            disabled={query.page === 1}
                                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            <MdChevronLeft size={20} />
                                            Anterior
                                        </button>

                                        {/* Números das páginas */}
                                        <div className="flex gap-2">
                                            {paginationButtons}
                                        </div>

                                        {/* Botão Próximo */}
                                        <button
                                            onClick={() => handlePageChange(query.page + 1)}
                                            disabled={query.page === totalPages}
                                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            Próximo
                                            <MdChevronRight size={20} />
                                        </button>

                                        {/* Botão Última Página */}
                                        <button
                                            onClick={() => handlePageChange(totalPages)}
                                            disabled={query.page === totalPages}
                                            className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                            title="Última página"
                                        >
                                            »
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-500 text-lg">Nenhum livro encontrado</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
});
