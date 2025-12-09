import { FaTrashAlt } from "react-icons/fa";
import { useDeleteCategory } from "../../../../../hooks/category/index.js";
import { IoIosAlert } from "react-icons/io";
import { ModalError } from "../../../../ModalError/index.jsx";
import { useEffect } from "react";
import { ModalSucess } from "../../../../ModalSucess/index.jsx";

export const ModalDeleteCategory = ({ modalId, categoryId, categoryName }) => {
    const { handleDeleteCategory, isSuccess, isError, error } = useDeleteCategory(categoryId);
    const modalIdSucess = `modal_delete_category_success_${categoryId}`;
    const modalIdError = `modal_delete_category_error_${categoryId}`;

    useEffect(() => {
        if (isSuccess) {
            const modalSuccess = document.getElementById(modalIdSucess);
            modalSuccess.showModal();
        } else if (isError) {
            const modalError = document.getElementById(modalIdError);
            modalError.showModal();
        }
    }, [isSuccess, isError, modalIdSucess, modalIdError]);

    const handleDelete = () => {
        handleDeleteCategory();
    };

    return (
        <div>
            <button 
                className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer" 
                onClick={() => document.getElementById(modalId).showModal()}
            >
                <FaTrashAlt />
            </button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <IoIosAlert size={45} color="#e70000ff" />
                    <h3 className="font-semibold text-xl pt-3">Tem certeza que deseja excluir esta categoria?</h3>
                    <p className="py-2 text-gray-500">
                        A categoria <span className="font-semibold">"{categoryName}"</span> será removida permanentemente.
                    </p>
                    <p className="text-sm text-gray-400">Esta ação é irreversível e não poderá ser desfeita.</p>
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
                                onClick={handleDelete}
                            >
                                Excluir
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            <ModalSucess 
                modalId={modalIdSucess} 
                h1="Categoria deletada com sucesso!" 
                p="A categoria foi removida permanentemente." 
            />
            <ModalError 
                modalId={modalIdError} 
                h1="Não foi possível deletar a categoria" 
                p={error || "Ocorreu um erro inesperado."} 
            />
        </div>
    )
}
