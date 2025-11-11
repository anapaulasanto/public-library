import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { LuUserRoundPen } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Header = () => {
    const dados = [
        {
            icon: <LuUserRoundPen size={18} />,
            tipo: "Autor",
            resposta: "Colleen Hoover"
        }, {
            icon: <CiCalendarDate size={18} />,
            tipo: "Ano",
            resposta: "2023"
        }, {
            icon: <CiEdit size={18} />,
            tipo: "Editora",
            resposta: "Plume"
        }, {
            icon: <AiOutlineBorderlessTable size={18} />,
            tipo: "ISBN",
            resposta: "978-0-452-28423-4"
        }
    ]

    return (
        <div className="flex justify-center gap-10 py-10" >
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
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <h2 className="card-title text-[1.8rem] ">É Assim que Acaba</h2>
                        <p className="text-gray-600">Colleen Hoove</p>
                        <p class="bg-gray-300 px-3 py-1 w-fit font-semibold rounded-xl text-xs">Romance</p>
                    </div>
                    <div>
                        <button className="btn bg-sky-600 text-white rounded-2xl px-8 hover:bg-sky-700 duration-150">Alugar</button>
                    </div>
                </div>
                <div className="w-150 pt-10">
                    <h1 className="font-semibold">Descrição</h1>
                    <p className="text-sm pt-2 text-gray-700">Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, se mudou para Boston e abriu a própria loja. Então, quando se sente atraída por um lindo neurocirurgião chamado Ryle Kincaid, tudo parece perfeito demais para ser verdade.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-10">
                    {dados.map((dado, index) => (
                        <div key={index} className="flex gap-1  items-center">
                            {dado.icon}
                            <h1 className="font-bold">{dado.tipo}</h1>
                            <p className="">{dado.resposta}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
