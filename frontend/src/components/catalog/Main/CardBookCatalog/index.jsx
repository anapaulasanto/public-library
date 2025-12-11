import React, { useCallback, useMemo, useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import { nameToSlug } from "../../../../utils/index.js";
import { useBooksAdmin, useSearchBooks } from "../../../../hooks/book/index.js";
import { Loading } from "../../../Loading/index.jsx";
import NoImg from "../../../../assets/no-img.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const CardBook = ({ searchParams }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 8;

    const { data: allBooks, isLoading: isLoadingAll, isError: isErrorAll } = useBooksAdmin();
    const { data: searchResults, isLoading: isLoadingSearch, isError: isErrorSearch, refetch } = useSearchBooks(
        searchParams?.text,
        searchParams?.type
    );
    const navigate = useNavigate();

    // Executar busca quando searchParams mudar e resetar para página 1
    useEffect(() => {
        if (searchParams?.text) {
            refetch();
            setCurrentPage(1);
        }
    }, [searchParams, refetch]);

    // Resetar para página 1 quando não houver busca
    useEffect(() => {
        if (!searchParams?.text) {
            setCurrentPage(1);
        }
    }, [searchParams?.text]);

    // Determinar qual dados usar: busca ou lista completa
    const books = searchParams?.text ? searchResults : allBooks;
    const isLoading = searchParams?.text ? isLoadingSearch : isLoadingAll;
    const isError = searchParams?.text ? isErrorSearch : isErrorAll;

    // Cálculos de paginação
    const totalBooks = books?.length || 0;
    const totalPages = Math.ceil(totalBooks / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const currentBooks = books?.slice(startIndex, endIndex) || [];

    const handleBookClick = useCallback((book) => {
        navigate(`/catalog/book/${nameToSlug(book.title)}/${book.id}`, {
            state: { book }
        });
    }, [navigate]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        const maxButtons = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
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
                        currentPage === i
                            ? 'bg-sky-700 text-white shadow-lg scale-110'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return buttons;
    };

    const renderedBooks = useMemo(() => (
        currentBooks?.map((book) => (
            <div
                key={book.id}
                onClick={() => handleBookClick(book)}
                className="card bg-neutral-200/20 border border-neutral-300 shadow-sm min-h-[660px] hover:shadow-2xl w-[19%] cursor-pointer transition-all duration-200 hover:scale-105 gap-2 2xl:h-[800px] 2xl:w-[22%]"
            >
                <figure className="w-full h-fit">
                    <img
                        src={book.img || NoImg}
                        alt={`Livro ${book.title}`}
                        className="w-full rounded-t-xl object-cover object-center"
                        loading="lazy"
                    />
                </figure>
                <div className="card-body flex flex-col items-start min-h-[35%] w-full">
                    <h2 className="card-title text-[1rem] text-start">{book.title}</h2>
                    <div className="flex items-center justify-between w-full">
                        <p className="flex items-center gap-1 text-sm text-zinc-600">
                            {book.author || 'Autor desconhecido'}
                        </p>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="flex items-center gap-1 text-sm text-zinc-600 mb-3">
                            <CiCalendar />
                            {book.year || 'Data desconhecida'}
                        </p>
                    </div>
                    <div className="overflow-hidden text-xs max-w-full leading-5 mb-4">
                        <p className="line-clamp-3 text-slate-500">{book.description || 'Sem descrição.'}</p>
                    </div>
                    <button
                        onClick={() => handleBookClick(book)}
                        className="btn bg-sky-700 text-white rounded-lg hover:bg-sky-800">
                        Ver livro
                    </button>
                </div>
            </div>
        ))
    ), [currentBooks, handleBookClick]);

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <div className="mt-10 text-red-500">Erro ao carregar os livros. Tente novamente.</div>;
    }


    return (
        <div className="flex flex-col items-center justify-center gap-6 my-10 w-full">
            <div className="flex flex-wrap gap-5 justify-center w-full">
                {renderedBooks}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
                <div className="flex flex-col items-center gap-4 mt-8 w-full">
                    <p className="text-sm text-gray-600">
                        Mostrando {startIndex + 1} - {Math.min(endIndex, totalBooks)} de {totalBooks} livros
                    </p>
                    
                    <div className="flex items-center gap-2">
                        {/* Botão Primeira Página */}
                        <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            title="Primeira página"
                        >
                            «
                        </button>

                        {/* Botão Anterior */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <MdChevronLeft size={20} />
                            Anterior
                        </button>

                        {/* Números das páginas */}
                        <div className="flex gap-2">
                            {renderPaginationButtons()}
                        </div>

                        {/* Botão Próximo */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Próximo
                            <MdChevronRight size={20} />
                        </button>

                        {/* Botão Última Página */}
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            title="Última página"
                        >
                            »
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
};
