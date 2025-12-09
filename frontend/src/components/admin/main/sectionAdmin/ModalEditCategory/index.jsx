import { useState, useEffect } from "react";
import { FaPencilAlt, FaLayerGroup, FaAlignLeft, FaHashtag, FaStar } from "react-icons/fa";
import { useEditCategory } from "../../../../../hooks/category/index.js";
import { ModalSucess } from "../../../../ModalSucess/index.jsx";
import { ModalError } from "../../../../ModalError/index.jsx";

export const ModalEditCategory = ({ modalId, h1, p, categoryName, description, categoryCode, categoryPopularity, categoryId }) => {
    const { handleEditCategory, isSuccess, isError, error } = useEditCategory(categoryId);
    const modalIdSucess = `modal_edit_category_success_${categoryId}`;
    const modalIdError = `modal_edit_category_error_${categoryId}`;

    const [formData, setFormData] = useState({
        categoryName: categoryName,
        description: description,
        categoryCode: categoryCode,
        categoryPopularity: categoryPopularity
    });

    useEffect(() => {
        if (isSuccess) {
            const modal = document.getElementById(modalIdSucess);
            if (modal) {
                modal.showModal();
            }
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            const modal = document.getElementById('modalIdError');
            if (modal) {
                modal.showModal();
            }
        }
    }, [isError]);

    const handleOpenModal = () => {
        // Reseta os dados do formulário quando o modal é aberto
        setFormData({
            categoryName: categoryName,
            description: description,
            categoryCode: categoryCode,
            categoryPopularity: categoryPopularity
        });
        document.getElementById(modalId).showModal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleEditCategory(formData);
            document.getElementById(modalId).close();
        } catch (error) {
            console.error("Erro ao editar categoria:", error);
        }
    };
    return (
        <div>
            <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}>
                <FaPencilAlt />
            </button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center max-w-2xl">
                    <div className="flex flex-col self-start w-full">
                        <h3 className="font-semibold text-lg">{h1}</h3>
                        <p className="text-gray-500">{p}</p>
                    </div>

                    <div className="modal-action w-full">
                        <form
                            method="dialog"
                            onSubmit={handleSubmit}
                            className="flex flex-col justify-start w-full gap-6"
                        >
                            {/* Seção Informações Básicas */}
                            <div className="flex flex-col gap-2 pt-4">
                                <h4 className="font-semibold">Informações da Categoria</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <fieldset className="fieldset text-sm col-span-2">
                                        <legend className="fieldset-legend flex items-center gap-1">
                                            <FaLayerGroup /> Nome da Categoria
                                        </legend>
                                        <input
                                            type="text"
                                            name="categoryName"
                                            value={formData.categoryName}
                                            onChange={handleChange}
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full"
                                            placeholder="Digite o nome da categoria"
                                            required
                                        />
                                    </fieldset>

                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1">
                                            <FaHashtag /> Código
                                        </legend>
                                        <input
                                            type="number"
                                            name="categoryCode"
                                            value={formData.categoryCode}
                                            onChange={handleChange}
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full"
                                            placeholder="Ex: 1, 2, 3..."
                                            required
                                        />
                                    </fieldset>

                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1">
                                            <FaStar /> Popularidade
                                        </legend>
                                        <input
                                            type="number"
                                            name="categoryPopularity"
                                            value={formData.categoryPopularity}
                                            onChange={handleChange}
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full"
                                            placeholder="Ex: 1 a 10"
                                            min="1"
                                            max="100"
                                            required
                                        />
                                    </fieldset>
                                </div>
                            </div>

                            {/* Seção Descrição */}
                            <div className="flex flex-col gap-2">
                                <fieldset className="fieldset text-sm">
                                    <legend className="fieldset-legend flex items-center gap-1">
                                        <FaAlignLeft /> Descrição
                                    </legend>
                                    <textarea
                                        name="description"
                                        value={formData.description || ''}
                                        onChange={handleChange}
                                        className="textarea rounded-lg border border-gray-200 outline-blue-400 w-full h-24"
                                        placeholder="Digite uma breve descrição da categoria..."
                                    ></textarea>
                                    <p className="text-xs text-gray-400 mt-1">Uma boa descrição ajuda a identificar o tipo de livros nesta categoria.</p>
                                </fieldset>
                            </div>

                            <div className="flex self-end gap-4 pt-4">
                                <button
                                    type="button"
                                    className="btn rounded-xl bg-white"
                                    onClick={() => document.getElementById(modalId).close()}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-sky-700 px-10 text-white rounded-xl"
                                >
                                    Salvar alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            <ModalSucess
                modalId={modalIdSucess}
                h1="Categoria atualizada com sucesso!"
                p="As alterações foram salvas."
            />
            <ModalError
                modalId={modalIdError}
                h1="Não foi possível atualizar a categoria"
                p={error || "Ocorreu um erro inesperado."}
            />
        </div>
    )
}
