import React from "react";
import { books } from "../../../../data/cardBook"
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"

export const CardBook = () => {
    return (
        <div class=" flex flex-col items-center justify-center gap-5 lg:flex-row lg:flex-wrap my-10 hover:cursor-pointer w-full">
            {books.map((book, index) => (
                <Link to="/catalog/book" key={index}
                    className="card bg-neutral-100 border border-neutral-300 shadow-sm h-[46%] hover:shadow-2xl w-[25%]"
                >
                    <figure class="h-full w-full">
                        <img
                            src={book.img}
                            alt="Livro Entendendo Algoritmos"
                            className="w-full rounded-t-xl"
                        />
                    </figure>

                    <div className="card-body flex flex-col  text-start items-start pb-5 max-h-[50%]">
                        <h2 className="card-title text-[1.03rem] ">{book.title}</h2>
                        <p className="flex items-center gap-1 text-sm text-zinc-600">
                            <CiUser />
                            {book.author}
                        </p>
                        <div className="flex justify-between w-full ">
                            <p className="flex items-center gap-1 text-sm text-zinc-600 mb-3">
                                <CiCalendar />
                                {book.year}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-zinc-600 mb-3">
                                <FaStar color="#ffd900ff" size={13} />
                                <p className="font-semibold text-black">{book.avaliation}</p>
                                <p className="text-xs">({book.avarageAvaliation})</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-3">
                            <p class="bg-gray-300 px-3 py-1 font-semibold rounded-xl text-xs">{book.category}</p>
                            <button className="flex items-center gap-2 font-semibold border border-neutral-300 bg-neutral-100 shadow px-3 py-0.5 rounded-xl hover:cursor-pointer hover:border-gray-500">
                                <FaEye />
                                Ver
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
};
