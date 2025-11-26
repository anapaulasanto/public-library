import React from "react";
import { CiCalendar, CiClock1, CiShare1 } from "react-icons/ci";
import { Link } from "react-router-dom"
import NoImg  from "../../../../assets/no-img.png"

export const CardBookApi = ({ book }) => {
    const date = book.volumeInfo.publishedDate;
    const year = date ? date.substring(0, 4) : 'Data desconhecida';
    const info = book.volumeInfo;

    return (
        <div
            key={book.id}
            className="card bg-neutral-200/20 border border-neutral-300 shadow-sm h-[650px] hover:shadow-2xl w-[19%] cursor-pointer transition-all duration-200 hover:scale-105 gap-2 2xl:h-[810px] 2xl:w-[19%]"
        >
            <figure className="w-full h-full">
                <img
                    src={info.imageLinks?.thumbnail || NoImg}
                    alt={`Livro ${info.title}`}
                    className="w-full rounded-t-xl object-cover object-center"
                    loading="lazy"
                />
            </figure>
            <div className="card-body flex flex-col items-start max-h-[35%] w-full">
                <h2 className="card-title text-[1rem] text-start">{info.title}</h2>
                <div className="flex items-center justify-between w-full">
                    <p className="flex items-center gap-1 text-sm text-zinc-600">
                        {info.authors?.join(', ') || 'Autor desconhecido'}
                    </p>
                </div>
                <div className="flex justify-between w-full ">
                    <p className="flex items-center gap-1 text-sm text-zinc-600 mb-3">
                        <CiCalendar />
                        {year}
                    </p>
                </div>
                <div className="overflow-hidden text-xs max-w-full leading-5 mb-4">
                    <p className="line-clamp-3 text-slate-500">{info.description || 'Sem descrição.'}</p>
                </div>
                <div className="flex  gap-3 w-full mt-2">
                    <Link
                        to={info.previewLink || '#'}
                        target="_blank"
                        className="bg-sky-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-sky-800 transition"
                        aria-label="Abrir prévia do livro"
                    >
                        <CiClock1 />
                        Prévia
                    </Link>
                    <Link
                        to={info.infoLink || '#'}
                        target="_blank"
                        className="bg-white px-7 py-2 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-gray-100 transition"
                        aria-label="Abrir informações do livro"
                    >
                        <CiShare1 />
                        Info
                    </Link>
                </div>
            </div>
        </div>
    )
};
