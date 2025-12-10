import { FaTrashAlt } from "react-icons/fa";
import { useDeleteBook } from "../../../../../hooks/book/index.js";
import { IoIosAlert } from "react-icons/io";
import { ModalError } from "../../../../ModalError/index.jsx";
import { useEffect } from "react";
import { ModalSucess } from "../../../../ModalSucess/index.jsx";

export const ModalDeleteBooks = ({ modalId, bookId }) => {
    const { handleDeleteBook, isSuccess, isError, error } = useDeleteBook(bookId);
    const modalIdSucess = `modal_delete_book_success_${bookId}`;
    const modalIdError = `modal_delete_book_error_${bookId}`;

    useEffect(() => {
        if (isSuccess) {
            document.getElementById(modalId).close();
            setTimeout(() => {
                const modalSuccess = document.getElementById(modalIdSucess);
                if (modalSuccess && !modalSuccess.open) {
                    modalSuccess.showModal();
                }
            }, 150);
        } else if (isError) {
            document.getElementById(modalId).close();
            setTimeout(() => {
                const modalError = document.getElementById(modalIdError);
                if (modalError && !modalError.open) {
                    modalError.showModal();
                }
            }, 150);
        }
    }, [isSuccess, isError, modalIdSucess, modalIdError, modalId]);

    const handleDelete = async () => {
        try {
            await handleDeleteBook();
        } catch (error) {
            console.error("Erro ao deletar livro:", error);
        }
    };

    return (
        <div>
            <button className="btn bg-transparent border-none hover:bg-blue-200 hover:cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}><FaTrashAlt /></button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <IoIosAlert size={45} color="#e70000ff" />
                    <h3 className="font-semibold text-xl pt-3">Tem certeza que deseja excluir este livro?</h3>
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
                                type="button"
                                className="btn bg-sky-700 text-white rounded-lg"
                                onClick={handleDelete}
                            >
                                Excluir
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            <ModalSucess modalId={modalIdSucess} h1="Livro deletado com sucesso!" p="O livro foi removido permanentemente." />
            <ModalError modalId={modalIdError} h1="Não foi possível deletar o livro" p={"Este livro possui um aluguel ativo e não pode ser removido"} />
        </div>
    )
}
