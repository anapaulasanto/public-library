import { CiSearch } from "react-icons/ci";
import { ContentTitle } from "../../../../admin/AdminDashboard/ContentTitle";
import { CardsBook } from "../../../../Home/CardsBook";
import { Link } from "react-router-dom";
import { CardBook } from "../../../../catalog/Main/CardBookCatalog";

export const SectionRecomended = () => {
    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-10 rounded-xl w-full flex flex-col justify-center">
            <ContentTitle
                h1="Recomendados para você"
                p="Livros em alta"
            />
            <div className="w-[90%] flex m-auto">
                <CardBook />
            </div>
            <Link
                className="bg-gradient text-white font-semibold shadow rounded-xl w-full h-12 flex items-center mx-auto justify-center mt-10 gap-2 text-sm hover:cursor-pointer hover:shadow-xl lg:w-1/3"
                to="/catalog/books"
            >
                <CiSearch size={18} />
                Explorar catálogo
            </Link>
        </section>
    )
}