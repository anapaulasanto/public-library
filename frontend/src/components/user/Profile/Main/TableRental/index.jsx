import imgCard from "../../../../../assets/bg-auth.jfif"
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa"
import { ModalSure } from "../../ModalSure"
import { useUserRentals } from "../../../../../hooks/user/index.js"
import { Loading } from "../../../../Loading/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import bookIcon from "../../../../../assets/icons/book-icon.png"
import { nameToSlug } from "../../../../../utils/index.js";

export const TableRental = () => {
    const { data: rental, isLoading, isError } = useUserRentals();
    const navigate = useNavigate();

    const onClickRental = (bookTitle, bookId) => {
        navigate(`/catalog/book/${nameToSlug(bookTitle)}/${bookId}`, { state: { bookId } });
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (isError) {
        return (
            <section className="flex flex-col items-center justify-center h-full ">
                <img src={bookIcon} alt="Icone de livro" />
                <p className="font-semibold text-xl mb-3">Nenhum aluguel ativo</p>
                <p className="text-gray-500">Você ainda não possui livros alugados no momento.</p>
                <Link
                    className="bg-gradient text-white font-semibold shadow rounded-xl w-full h-10 flex items-center mx-auto justify-center mt-10 gap-2 text-sm hover:cursor-pointer hover:shadow-xl lg:w-1/7"
                    to="/catalog/books"
                >
                    Alugar um livro
                </Link>
            </section>
        );
    }

    return (
        <div className="grid grid-cols-1 pb-6 gap-10 mt-10 lg:grid-cols-2 max-h-[500px] overflow-y-auto">
            {rental.map((r, index) => (
                <div
                    key={index}
                    className="flex gap-3 h-40 border border-gray-200 rounded-xl hover:cursor-pointer hover:shadow-2xl hover:h-41 hover:duration-150 ease-out"
                    onClick={() => onClickRental(r.bookTitle, r.bookId)}
                >
                    <img src={imgCard} alt="" className="w-1/3 rounded-l-xl " />
                    <div className="flex flex-col gap-10 ">
                        <div>
                            <h1 className="font-semibold text-xl pt-2">{r.bookTitle}</h1>
                        </div>

                        <div className="flex flex-col items-start gap-2 w-full">
                            <div className="flex items-center gap-2 bg-green-500 text-white rounded-xl py-1 px-4 ">
                                <FaRegClock size={12} />
                                <p className="text-xs ">Entrega: {r.returnDate}</p>
                            </div>
                            <div className="flex gap-1 items-center text-xs text-gray-500">
                                <FaRegCalendarAlt size={12} />
                                <p>Data do aluguel: {r.rentalDate} </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}