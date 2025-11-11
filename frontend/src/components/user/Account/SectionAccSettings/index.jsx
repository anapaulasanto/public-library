import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { Link } from "react-router-dom";
import { Loading } from "../../../Loading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdateSchema } from "../../../../data/schemaForms";
import { useEffect } from "react";
import { ModalSucess } from "../../../ModalSucess";

export const SectionSettings = ({ redirectTo, defaultName, defaultEmail, isLoading, handleUpdate, error, isSubmitting, isSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(userUpdateSchema) })
    const modalId = "sucess_modal_settings"

    useEffect(() => {
        if (isSuccess) {
            const modal = document.getElementById(modalId);
            modal.showModal()
        }
    }, [isSuccess]);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <section>
            <div className="flex items-center gap-3 w-full 2xl:w-[80%] mx-auto">
                <Link to={redirectTo}>
                    <FaArrowAltCircleLeft size={26} />
                </Link>
                <ContentTitle
                    h1="Configurações da Conta"
                    p="Gerencie suas informações pessoais"
                />
            </div>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="fieldset grid grid-cols-2 gap-10 bg-base-200 border-base-300 rounded-box w-full 2xl:w-[80%] mx-auto border p-4 my-10">
                    <fieldset>
                        <legend className="fieldset-legend text-base">Nome completo</legend>
                        <input type="text" className="input w-full" defaultValue={defaultName} {...register("name")} />
                        <p className="text-red-600 text-sm">{errors.name?.message}</p>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend text-base">Email</legend>
                        <input type="email" className="input w-full" defaultValue={defaultEmail}  {...register("email")} />
                        <p className="text-red-600 text-sm">{errors.email?.message}</p>
                    </fieldset>
                    <div className="flex gap-4 text-base mt-2">
                        <button
                            type="submit"
                            className="flex items-center justify-around bg-sky-800 font-semibold text-white w-50 h-10 rounded-lg hover:bg-sky-700 hover:cursor-pointer"
                            disabled={isSubmitting}

                        >
                            <FaRegSave />
                            {isSubmitting ? "Salvando..." : "Salvar alterações"}
                        </button>
                    </div>
                    {error && <p className="text-red-600 text-center pt-1 text-sm">{error}</p>}
                </div>
            </form>
            <ModalSucess modalId={modalId} h1="Usuário atualizado com sucesso!" p="Todas as alterações foram salvas." />
        </section>
    )
}