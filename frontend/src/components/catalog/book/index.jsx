import React from "react";
import { StarRating } from "../../user/Profile/Main/StarRating";
import { LuStar, LuUserRoundPen } from "react-icons/lu";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiFillStar, AiOutlineBorderlessTable } from "react-icons/ai";

export const Book = () => {
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
        <div className="flex flex-col w-[95%]" >
            <div className="flex justify-center gap-10 py-10" >
                <figure class="h-50 w-70">
                    <img
                        src="https://m.media-amazon.com/images/I/91r5G8RxqfL._SL1500_.jpg"
                        alt="Livro Entendendo Algoritmos"
                        className="w-full  rounded-xl"
                    />
                </figure>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1">
                        <h2 className="card-title text-[1.8rem] ">É Assim que Acaba</h2>
                        <p className="text-gray-600">Colleen Hoove</p>
                        <p class="bg-gray-300 px-3 py-1 w-fit font-semibold rounded-xl text-xs">Romance</p>

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

            <div className="bg-neutral-200/50 mt-20 p-4 border border-neutral-300 rounded-xl w-[80%] mx-auto">
                <p className="text-2xl font-semibold">Visão Geral das Avaliações</p>

                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-2 ml-10 text-sm text-zinc-600 mb-3 w-1/2">
                        <p className="font-bold text-black ml-8 pt-6 text-5xl">4.8</p>
                        <div className="rating self-start">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-600" aria-label="5 star" />
                        </div>
                        <p className=" ml-6">20 avaliações</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <p className="text-sm">1</p>
                                <AiFillStar />
                            </div>
                            <progress className="progress progress-info w-56" value="10" max="100"></progress>
                            <p className="text-gray-600 text-sm">1</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <p className="text-sm">2</p>
                                <AiFillStar />
                            </div>
                            <progress className="progress progress-info w-56" value="20" max="100"></progress>
                            <p className="text-gray-600 text-sm">2</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <p className="text-sm">3</p>
                                <AiFillStar />
                            </div>
                            <progress className="progress progress-info w-56" value="30" max="100"></progress>
                            <p className="text-gray-600 text-sm">4</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <p className="text-sm">4</p>
                                <AiFillStar />
                            </div>
                            <progress className="progress progress-info w-56" value="50" max="100"></progress>
                            <p className="text-gray-600 text-sm">6</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <p className="text-sm">5</p>
                                <AiFillStar />
                            </div>
                            <progress className="progress progress-info w-56" value="70" max="100"></progress>
                            <p className="text-gray-600 text-sm">7</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 bg-neutral-200/50 mt-5 p-4 border border-neutral-300 rounded-xl w-[80%] mx-auto">
                <p className="text-2xl font-semibold">Escreva sua Avaliação</p>
                <p className="font-semibold">Sua nota para este livro</p>
                <div className="rating self-start">
                    <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                    <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
                <p className="font-semibold pt-10">Seu comentário</p>
                <div>
                    <form>
                        <textarea className="textarea w-full bg-neutral-200 border border-gray-300" placeholder="Compartilhe sua opinião sobre esse livro..."></textarea>
                        <button className="mt-8 bg-sky-600 p-1 px-3 text-white rounded-lg hover:cursor-pointer hover:bg-sky-700 duration-150" type="submit">Enviar</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col gap-2 bg-neutral-200/50 mt-5 p-4 border border-neutral-300 rounded-xl w-[80%] mx-auto">
                <p className="text-2xl font-semibold">Avaliações dos leitores</p>
            </div>
        </div>
    )
};
