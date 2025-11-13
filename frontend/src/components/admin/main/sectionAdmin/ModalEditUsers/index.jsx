import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPencilAlt } from "react-icons/fa";
import { userUpdateSchema } from "../../../../../data/schemaForms";
import { useUserUpdate } from "../../../../../hooks/user/index.js";
import { ModalSucess } from "../../../../ModalSucess";

export const ModalEditUsers = ({ modalId, h1, p, defaultName, defaultEmail, userId }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(userUpdateSchema) })
    const { handleUpdateUser, isSuccess } = useUserUpdate(userId);
    const modalIdSucess = "modal_sucess_edit_user_admin"

    useEffect(() => {
        if (isSuccess) {
            const modal = document.getElementById(modalIdSucess)
            modal.showModal()
        }
    }, [isSuccess]);

    const onValidSubmit = (data) => {
        handleUpdateUser(data);
        document.getElementById(modalId).close();
    }

    return (
        <div>
            <button className="btn border-none bg-transparent hover:bg-blue-200 hover:cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}><FaPencilAlt /></button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box flex flex-col items-center max-w-fit">
                    <div className="flex flex-col self-start">
                        <h3 className="font-semibold text-lg">{h1}</h3>
                        <p className="text-gray-500">{p}</p>
                    </div>

                    <div className="modal-action ">
                        <form
                            method="dialog"
                            className="flex flex-col justify-start "
                            onSubmit={handleSubmit(onValidSubmit)}
                        >
                            <div className="flex gap-3">
                                <fieldset className="fieldset text-sm w-70 ">
                                    <legend className="fieldset-legend ">Nome</legend>
                                    <input
                                        type="text"
                                        className="input rounded-lg border border-gray-200 outline-blue-400"
                                        defaultValue={defaultName}
                                        {...register("name")}
                                    />
                                    <p className="text-red-600 text-sm">{errors.name?.message}</p>
                                </fieldset>
                                <fieldset className="fieldset text-sm w-70">
                                    <legend className="fieldset-legend">Email</legend>
                                    <input
                                        type="text"
                                        className="input rounded-lg border border-gray-200 outline-blue-400"
                                        defaultValue={defaultEmail}
                                        {...register("email")}
                                    />
                                    <p className="text-red-600 text-sm">{errors.email?.message}</p>
                                </fieldset>
                            </div>
                            <div className="flex self-end gap-4 pt-4">
                                <button
                                    className="btn rounded-xl bg-white"
                                    type="button"
                                    onClick={() => {
                                        document.getElementById(modalId).close()
                                    }}

                                >
                                    Cancelar
                                </button>
                                <button
                                    className="btn bg-sky-700 px-10 text-white rounded-xl"
                                    type="submit"
                                >
                                    Salvar alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            <ModalSucess modalId={modalIdSucess} h1="Usuário atualizado com sucesso!" p="Todas as alterações foram salvas." />
        </div>
    )
}