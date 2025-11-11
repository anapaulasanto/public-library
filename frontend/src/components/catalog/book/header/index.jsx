import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SectionDataBook } from "./sectionDataBook";

export const Header = ({ book }) => {
    return (
        <div className="flex justify-center mx-auto gap-10 py-10 w-[85%]" >
            <Link to="/catalog/books">
                <FaArrowAltCircleLeft size={26} />
            </Link>
            <figure class="h-50 w-70">
                <img
                    src="https://m.media-amazon.com/images/I/91r5G8RxqfL._SL1500_.jpg"
                    alt="Livro Entendendo Algoritmos"
                    className="w-full  rounded-xl"
                />
            </figure>
            <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                    <h2 className="card-title text-[1.8rem] ">{book.title}</h2>
                    <p className="text-gray-600">{book.author}</p>
                    <div className="flex justify-between items-center">
                        <p className="bg-gray-300 px-3 py-1 w-fit font-semibold rounded-xl text-xs">{book.categoryName}</p>
                        <div>
                            <button className="btn bg-sky-600 text-white rounded-2xl px-8 hover:bg-sky-700 duration-150">Alugar</button>
                        </div>
                    </div>
                </div>
                <div className="w-150 pt-10">
                    <h1 className="font-semibold">Descrição</h1>
                    <p className="text-sm pt-2 text-gray-700">Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, se mudou para Boston e abriu a própria loja. Então, quando se sente atraída por um lindo neurocirurgião chamado Ryle Kincaid, tudo parece perfeito demais para ser verdade.
                    </p>
                </div>
                    <SectionDataBook book={book} />
            </div>
        </div>
    )
};
