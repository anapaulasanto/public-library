import { Link } from 'react-router-dom'
import { CardsCategories } from '../CardsCategories'
import { SectionBooks } from '../SectionBooks'
import { SectionReady } from '../SectionReady'

export const MainHome = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mt-10 pb-3 text-gradient lg:text-5xl">Explore por Categoria</h1>
            <p className="text-gray-600 mb-10">Descubra livros organizados nas suas categorias favoritas</p>
            <CardsCategories />
            <Link to="/catalog">
                <button className="flex self-center items-center justify-center text-center text-black font-semibold border border-gray-100 shadow-md w-2/4 bg-white my-10 h-[3.5rem] rounded-lg hover:bg-gray-200 cursor-pointer sm:w-[12rem]">Ver mais categorias</button>
            </Link>
            <SectionBooks />
            <SectionReady />
        </main>

    )
}