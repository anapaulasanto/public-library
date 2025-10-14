import { CiSearch } from "react-icons/ci";
import { ContentTitle } from "../../../../admin/AdminDashboard/ContentTitle";
import { CardsBook } from "../../../../Home/CardsBook";


export function SectionRecomended() {
    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-10rounded-xl w-full flex flex-col justify-center">
            <ContentTitle
                h1="Recomendados para você"
                p="Livros em alta"
            />
            <CardsBook />
            <button className="bg-gradient text-white font-semibold shadow rounded-xl w-1/3 h-10 flex items-center mx-auto justify-center mt-10 gap-2 text-sm hover:cursor-pointer hover:shadow-xl">
                <CiSearch size={18} />
                Explorar catálogo
            </button>
        </section>
    )
}