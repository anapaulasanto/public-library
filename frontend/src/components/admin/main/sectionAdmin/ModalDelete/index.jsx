import { FaTrashAlt } from "react-icons/fa";
import { useUserDelete } from "../../../../../hooks/user";
import { IoIosAlert } from "react-icons/io";
import { ModalError } from "../../../../ModalError";
import { useEffect } from "react";
import { ModalSucess } from "../../../../ModalSucess";

export const ModalDeleteUser = ({ modalId, userId }) => {
    const { handleDeleteUser, isSuccess, isError } = useUserDelete(userId);
    const modalIdSucess = "modal_delete_user"
    const modalIdError = "modal_delete_user_error"

    useEffect(() => {
        if (isSuccess) {
            const modalSuccess = document.getElementById(modalIdSucess)
            modalSuccess.showModal()
        }
        else if (isError) {
            const modalError = document.getElementById(modalIdError)
            modalError.showModal()
        }
    }, [isSuccess, isError]);
    

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
                                onClick={handleDeleteUser}
                            >
                                Excluir
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            <ModalSucess modalId={modalIdSucess} h1="Usuário deletado com sucesso!" p="Todas as alterações foram salvas." />
            <ModalError modalId={modalIdError} h1="Não foi possível deletar usuário" p="Este usuário possui aluguéis ativos e não pode ser excluído." />
        </div>
    )
}