import imgCard from "../../../../../assets/bg-auth.jfif"
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa"
import { Modal } from "../../ModalSure"
import { useUserRentals } from "../../../../../hooks/user/index.jsx"
import { Loading } from "../../../../Loading/index.jsx";
import { Link } from "react-router-dom";
import bookIcon  from "../../../../../assets/icons/book-icon.png"

export const TableRental = () => {
    const { data: rental, isLoading, isError } = useUserRentals();

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
                    className="flex gap-3 h-54 border border-gray-200 rounded-xl hover:cursor-pointer hover:shadow-2xl hover:h-55 hover:duration-150 ease-out"
                >
                    <img src={imgCard} alt="" className="w-1/3 rounded-l-xl " />
                    <div className="flex flex-col justify-around ">
                            <div>
                                <h1 className="font-semibold text-xl">{r.bookTitle}</h1>
                            </div>
                            {/* <div>
                                <button
                                    className={`${r.status === 'Atrasado' ? 'bg-red-500' : 'bg-slate-500'} text-white px-2 text-sm font-semibold rounded-xl py-0.5`}
                                >
                                    {r.status}
                                </button>
                            </div> */}

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

                        <div className="flex flex-col gap-3 lg:flex-row">
                            <Modal
                                props="bg-sky-900 text-white w-50 lg:w-60"
                                modalId="my_modal_1"
                                h1="Deseja renovar?"
                                p="Ao renovar o livro você tem um prazo de 15 dias de leitura."
                                tittleBtn="Renovar"
                                txtBtn1="Renovar"
                                txtBtn2="Cancelar"
                            />
                            <Modal
                                props="bg-neutral-200 w-50 lg:w-30 text-black"
                                modalId="my_modal_2"
                                h1="Deseja devolver?"
                                p="Ao devolver o livro, o seu progresso será perdido."
                                tittleBtn="Devolver"
                                txtBtn1="Devolver"
                                txtBtn2="Cancelar"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}