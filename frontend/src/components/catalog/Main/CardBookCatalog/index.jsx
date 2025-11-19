import React, { useCallback } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useBooksAdmin } from "../../../../hooks/book/index.js";
import { Loading } from "../../../Loading";
import { nameToSlug } from "../../../../utils/index.js";

export const CardBook = () => {
    const { data: books, isLoading, isError } = useBooksAdmin();
    const navigate = useNavigate();

    const handleBookClick = useCallback((book) => {
        navigate(`/catalog/book/${nameToSlug(book.title)}/${book.id}`, {
            state: { book }
        });
    }, [navigate]);

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <div className="mt-10 text-red-500">Erro ao carregar os livros. Tente novamente.</div>;
    }

    return (
        <div class=" flex flex-col items-center justify-center gap-5 lg:flex-row lg:flex-wrap my-10 hover:cursor-pointer w-full">
            {books?.map((book, index) => (
                <button
                    key={index}
                    onClick={() => handleBookClick(book)}
                    className="card bg-neutral-200/20 border border-neutral-300 shadow-sm h-[95%] hover:shadow-2xl w-[17%] cursor-pointer transition-all duration-200 hover:scale-105"
                >
                    <figure class="h-fit w-fit">
                        <img
                            src="https://m.media-amazon.com/images/I/91r5G8RxqfL._SL1500_.jpg"
                            alt="Livro Entendendo Algoritmos"
                            className="w-full rounded-t-xl"
                        />
                    </figure>

                    <div className="card-body flex flex-col items-start max-h-[35%] w-full p-3">
                        <h2 className="card-title text-[1.03rem] text-start">{book.title}</h2>
                        <div className="flex items-center justify-between w-full">
                            <p className="flex items-center gap-1 text-sm text-zinc-600">
                                {book.author}
                            </p>
                            <div>
                                <p class="bg-gray-300 px-3 py-0.5 font-semibold rounded-xl text-xs">{book.categoryName}</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full ">
                            <p className="flex items-center gap-1 text-sm text-zinc-600 mb-3">
                                <CiCalendar />
                                {book.year}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-zinc-600 mb-3">
                                <FaStar color="#ffd900ff" size={13} />
                                <p className="font-semibold text-black">4.8</p>
                                <p className="text-xs">(20)</p>
                            </div>
                        </div>

                    </div>
                </button>
            ))}
        </div>
    )
};
