import { CardsBook } from "../CardsBook";

export function SectionBooks() {
    return (
        <section class="w-full flex flex-col justify-center gap-4 text-center p-5 py-10  bg-slate-50">
            <div class="flex flex-col items-start gap-1 lg:pl-[80px]">
                <h1 class="text-3xl font-bold">Livros em <span class="text-gradient">Destaque</span></h1>
                <p class="text-gray-500 text-start">Os mais populares e bem avaliados da nossa biblioteca</p>
            </div>
            <CardsBook />
            <button class="flex self-center items-center justify-center text-center text-black font-semibold border border-gray-100 shadow-md w-2/4 bg-white my-10 h-[3.5rem] rounded-lg hover:bg-gray-200 cursor-pointer sm:w-[12rem]">Ver mais livros</button>
        </section >
    )
}