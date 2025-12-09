import { CiSearch } from "react-icons/ci";
import { ContentTitle } from "../../../../admin/AdminDashboard/ContentTitle";
import { Link } from "react-router-dom";
import { useBooksAdmin } from "../../../../../hooks/book/index.js";
import { Loading } from "../../../../Loading/index.jsx";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { nameToSlug } from "../../../../../utils/index.js";
import NoImg from "../../../../../assets/no-img.png";

export const SectionRecomended = () => {
    const { data: books, isLoading, isError } = useBooksAdmin();
    const navigate = useNavigate();

    const handleBookClick = (book) => {
        navigate(`/catalog/book/${nameToSlug(book.title)}/${book.id}`, {
            state: { book }
        });
    };

    // Limitar aos 4 primeiros livros
    const limitedBooks = books?.slice(0, 4) || [];

    if (isLoading) return <Loading />;
    if (isError) return <div className="text-center text-red-500">Erro ao carregar livros.</div>;

    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-10 rounded-xl w-full flex flex-col justify-center">
            <ContentTitle
                h1="Recomendados para você"
                p="Livros em alta"
            />
            <div className="w-[95%] flex m-auto gap-4 mt-10">
                {limitedBooks.map((book) => (
                    <div
                        key={book.id}
                        onClick={() => handleBookClick(book)}
                        className="card bg-neutral-200/20 border border-neutral-300 shadow-sm h-[600px] hover:shadow-2xl w-[19%] cursor-pointer transition-all duration-200 hover:scale-105 gap-2 2xl:h-[760px] 2xl:w-[22%]"
                    >
                        <figure className="w-full h-fit">
                            <img
                                src={book.img || NoImg}
                                alt={`Livro ${book.title}`}
                                className="w-full rounded-t-xl object-cover object-center"
                                loading="lazy"
                            />
                        </figure>
                        <div className="card-body flex flex-col items-start h-[38%] w-full">
                            <h2 className="card-title text-[1rem] text-start">{book.title}</h2>
                            <div className="flex items-center justify-between w-full">
                                <p className="flex items-center gap-1 text-sm text-zinc-600">
                                    {book.author || 'Autor desconhecido'}
                                </p>
                            </div>
                            <div className="flex justify-between w-full">
                                <p className="flex items-center gap-1 text-sm text-zinc-600 mb-3">
                                    <CiCalendar />
                                    {book.year || 'Data desconhecida'}
                                </p>
                            </div>
                            <div className="overflow-hidden text-xs max-w-full leading-5 mb-4">
                                <p className="line-clamp-3 text-slate-500">{book.description || 'Sem descrição.'}</p>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleBookClick(book);
                                }}
                                className="btn btn-primary btn-sm bg-sky-700 border-sky-700 shadow w-full"
                            >
                                Ver detalhes
                            </button>
                        </div>
                    </div>
                ))}
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