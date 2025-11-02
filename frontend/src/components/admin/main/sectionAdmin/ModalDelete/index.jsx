import { FaTrashAlt } from "react-icons/fa";
import { useUserDelete } from "../../../../../hooks/user";
import { IoIosAlert } from "react-icons/io";
import { ModalError } from "../../../../ModalError";

export const ModalDeleteUser = ({ modalId, userId }) => {
    const { handleDeleteUser } = useUserDelete(userId);

    const onConfirmDelete = async () => {
        try {
            await handleDeleteUser();
            document.getElementById(modalId).close();

        } catch (error) {
            return <ModalError modalId={modalId} title="Não foi possível excluir usuário" subtitle="Este usuário possui aluguéis pendentes" />
            
        }
    }

    return (
        <div>
            <button className="btn bg-transparent border-none hover:bg-blue-200 hover:cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}><FaTrashAlt /></button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <IoIosAlert size={45} color="#e70000ff" />
                    <h3 className="font-semibold text-xl pt-3">Tem certeza que deseja excluir esse usuário?</h3>
                    <p className="py-2 text-gray-500">Esta ação é irreversível e não poderá ser desfeita.</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog" className="flex gap-2">
                            <button
                                type="button"
                                className="btn rounded-lg"
                                onClick={() => document.getElementById(modalId).close()}
                            >
                                Cancelar
                            </button>
                            <button
                                className="btn bg-sky-700 text-white rounded-lg"
                                onClick={onConfirmDelete}
                            >
                                Excluir
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}