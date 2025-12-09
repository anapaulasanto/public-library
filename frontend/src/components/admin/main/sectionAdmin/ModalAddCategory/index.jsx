import { useForm } from "react-hook-form";
import { FaPlus, FaLayerGroup, FaAlignLeft, FaHashtag, FaStar } from "react-icons/fa";
import { useAddCategory } from "../../../../../hooks/category/index.js";
import { useEffect } from "react";
import { ModalSucess } from "../../../../ModalSucess/index.jsx";
import { ModalError } from "../../../../ModalError/index.jsx";

export const ModalAddCategory = ({ modalId, h1, p }) => {
    const { register, handleSubmit, reset } = useForm();
    const { handleAddCategory, isSuccess, isError, error } = useAddCategory();
    const modalIdSucess = "modal_add_category_success";
    const modalIdError = "modal_add_category_error";

    useEffect(() => {
        if (isSuccess) {
            const modalSuccess = document.getElementById(modalIdSucess);
            if (modalSuccess) modalSuccess.showModal();
            reset(); // Limpa o formulário após sucesso
        } else if (isError) {
            const modalError = document.getElementById(modalIdError);
            if (modalError) modalError.showModal();
        }
    }, [isSuccess, isError, reset]);

    const onSubmit = async (data) => {
        await handleAddCategory(data);
        document.getElementById(modalId).close();
    };

    return (
        <div>
            <button 
                className="btn bg-blue-400 text-white rounded-xl hover:bg-blue-500" 
                onClick={() => document.getElementById(modalId).showModal()}
            >
                <FaPlus /> Adicionar Categoria
            </button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center max-w-2xl">
                    <div className="flex flex-col self-start w-full">
                        <h3 className="font-semibold text-lg">{h1}</h3>
                        <p className="text-gray-500">{p}</p>
                    </div>

                    <div className="modal-action w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start w-full gap-8">
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
                                            {...register("categoryName", { required: true })}
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
                                            {...register("categoryCode", { required: true, valueAsNumber: true })}
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
                                            {...register("categoryPopularity", { required: true, valueAsNumber: true, min: 1, max: 100 })}
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full" 
                                            placeholder="Ex: 1 a 100" 
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
                                        {...register("description")}
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
                                    Adicionar Categoria
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            <ModalSucess 
                modalId={modalIdSucess} 
                h1="Categoria criada com sucesso!" 
                p="A nova categoria foi adicionada ao sistema." 
            />
            <ModalError 
                modalId={modalIdError} 
                h1="Não foi possível criar a categoria" 
                p={"Já existe uma categoria com este código ou nome."} 
            />
        </div>
    )
}
