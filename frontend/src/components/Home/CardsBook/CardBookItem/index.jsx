import { memo } from "react";
import { CiUser, CiCalendar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { nameToSlug } from "../../../../utils/index.js";
import NoImg from "../../../../assets/no-img.png";

export const CardBookItem = memo(({ book }) => {
    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate(`/catalog/book/${nameToSlug(book.title)}/${book.id}`, {
            state: { book }
        });
    };

    return (
        <div
            key={book.id}
            onClick={handleBookClick}
            className="m-auto card bg-neutral-200/20 border border-neutral-300 shadow-sm h-[600px] hover:shadow-2xl w-[19%] cursor-pointer transition-all duration-200 hover:scale-105 gap-2 2xl:h-[760px] 2xl:w-[22%]"
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
                        handleBookClick();
                    }}
                    className="btn btn-primary btn-sm bg-sky-700 border-sky-700 shadow w-full"
                >
                    Ver detalhes
                </button>
            </div>
        </div>
    );
});