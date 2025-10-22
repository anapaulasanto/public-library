import { CardsBook } from "../CardsBook";
import { Link } from "react-router-dom";

export const SectionBooks = () => {
    return (
        <section className="w-full flex flex-col justify-center gap-4 text-center p-5 py-10  bg-slate-50">
            <div className="flex flex-col items-start gap-1 lg:pl-[80px]">
                <h1 className="text-3xl font-bold">Livros em <span className="text-gradient">Destaque</span></h1>
                <p className="text-gray-500 text-start">Os mais populares e bem avaliados da nossa biblioteca</p>
            </div>
            <CardsBook />
            <Link to="/catalog/books">
                <button className="flex self-center items-center justify-center mx-auto text-center text-black font-semibold border border-gray-100 shadow-md w-2/4 bg-white my-10 h-[3.5rem] rounded-lg hover:bg-gray-200 cursor-pointer sm:w-[12rem]">Ver mais livros</button>
            </Link>
        </section >
    )
}