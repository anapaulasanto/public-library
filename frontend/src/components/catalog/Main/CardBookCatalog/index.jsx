import React, { useCallback, useMemo, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import { nameToSlug } from "../../../../utils/index.js";
import { useBooksAdmin, useSearchBooks } from "../../../../hooks/book/index.js";
import { Loading } from "../../../Loading/index.jsx";
import NoImg from "../../../../assets/no-img.png";

export const CardBook = ({ searchParams }) => {
    const { data: allBooks, isLoading: isLoadingAll, isError: isErrorAll } = useBooksAdmin();
    const { data: searchResults, isLoading: isLoadingSearch, isError: isErrorSearch, refetch } = useSearchBooks(
        searchParams?.text,
        searchParams?.type
    );
    const navigate = useNavigate();

    // Executar busca quando searchParams mudar
    useEffect(() => {
        if (searchParams?.text) {
            refetch();
        }
    }, [searchParams, refetch]);

    // Determinar qual dados usar: busca ou lista completa
    const books = searchParams?.text ? searchResults : allBooks;
    const isLoading = searchParams?.text ? isLoadingSearch : isLoadingAll;
    const isError = searchParams?.text ? isErrorSearch : isErrorAll;

    const handleBookClick = useCallback((book) => {
        navigate(`/catalog/book/${nameToSlug(book.title)}/${book.id}`, {
            state: { book }
        });
    }, [navigate]);

    const renderedBooks = useMemo(() => (
        books?.map((book) => (
            <div
                key={book.id}
                onClick={() => handleBookClick(book)}
                className="card bg-neutral-200/20 border border-neutral-300 shadow-sm min-h-[660px] hover:shadow-2xl w-[19%] cursor-pointer transition-all duration-200 hover:scale-105 gap-2 2xl:min-h-[780px] 2xl:w-[22%]"
            >
                <figure className="w-full h-fit">
                    <img
                        src={book.img || NoImg}
                        alt={`Livro ${book.title}`}
                        className="w-full rounded-t-xl object-cover object-center"
                        loading="lazy"
                    />
                </figure>
                <div className="card-body flex flex-col items-start h-[38%] w-full">
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
    ), [books, handleBookClick]);

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <div className="mt-10 text-red-500">Erro ao carregar os livros. Tente novamente.</div>;
    }


    return (
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:flex-wrap my-10 hover:cursor-pointer w-full">
            {renderedBooks}
        </div>
    )
};
