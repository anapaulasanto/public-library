import { FaTrashAlt } from "react-icons/fa";

export const ModalDelete = ({ h1, p, acao, modalId }) => {
    return (
        <div>
            <button className="btn border-none hover:bg-blue-200 hover:cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}><FaTrashAlt /></button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <h3 className="font-bold text-xl">{h1}</h3>
                    <p className="py-4">{p}</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog" className="flex gap-2">
                            <button
                                className="btn bg-green-500 text-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    acao();
                                }}
                            >
                                Excluir
                            </button>
                            <button className="btn bg-red-500 text-white">Cancelar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}