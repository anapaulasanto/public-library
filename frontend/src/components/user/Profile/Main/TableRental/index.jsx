import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { Modal } from "../../ModalSure";
import imgCard from "../../../../../assets/bg-auth.jfif"

export function TableRental() {
    const books = [
        {
            title: "Dom Casmurro",
            author: "Machado de Assis",
            days: "5",
            devolution: '14/10/2025'
        },
        {
            title: "Dom Casmurro",
            author: "Machado de Assis",
            days: "5",
            devolution: '14/10/2025'
        },
        {
            title: "Dom Casmurro",
            author: "Machado de Assis",
            days: "5",
            devolution: '14/10/2025'
        }
    ]

    return (
        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
            {books.map((book) => (
                <div className="flex gap-3 h-70 border border-gray-200 rounded-xl lg:h-50">
                    <img src={imgCard} alt="" className="w-1/3 rounded-l-xl " />
                    <div className="flex flex-col  pt-3 gap-3">
                        <div>
                            <h1 className="font-semibold text-2xl">{book.title}</h1>
                            <p className="text-gray-500 text-sm">{book.author}</p>
                        </div>
                        <div className="flex flex-col items-start gap-4 mt-2 w-full lg:flex-row">
                            <div className="flex items-center gap-2 bg-green-500 text-white rounded-xl py-1 px-4 ">
                                <FaRegClock size={12} />
                                <p className="text-xs ">{book.days} dias restantes</p>
                            </div>
                            <div className="flex gap-1 items-center text-xs text-gray-500">
                                <FaRegCalendarAlt size={12} />
                                <p>Devolução: {book.devolution} </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-7 lg:flex-row">
                            <Modal props="bg-sky-900 text-white w-50 lg:w-55" modalId="my_modal_1" h1="Deseja renovar?" p="Ao renovar o livro você tem um prazo de 15 dias de leitura." tittleBtn="Renovar" txtBtn1="Renovar" txtBtn2="Cancelar" />
                            <Modal props="bg-neutral-200 w-50 lg:w-30 text-black" modalId="my_modal_2" h1="Deseja devolver?" p="Ao devolver o livro, o seu progresso será perdido." tittleBtn="Devolver" txtBtn1="Devolver" txtBtn2="Cancelar" />
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}