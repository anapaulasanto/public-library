import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { Link } from "react-router-dom";
import { Loading } from "../../../Loading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema } from "../../../../data/schemaForms";
import { useEffect } from "react";

export const SectionSettings = ({ redirectTo, defaultName, defaultEmail, isLoading, handleUpdate, error, isSubmitting }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(userRegisterSchema)});

    useEffect(() => {
        // Se os dados existirem (não forem undefined), reseta o formulário populando os campos.
        if (defaultName && defaultEmail) {
            reset({
                name: defaultName,
                email: defaultEmail,
            });
        }
        // roda sempre que os valores default mudarem
    }, [defaultName, defaultEmail, reset]);

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
                    <fieldset>
                        <legend className="fieldset-legend text-base">Nova senha</legend>
                        <input type="password" className="input w-full" placeholder="••••••••"  {...register("password")} />
                        <p className="text-red-600 text-sm">{errors.password?.message}</p>
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend text-base">Confirmar senha</legend>
                        <input type="password" className="input w-full" placeholder="••••••••"  {...register("confirmPassword")} />
                        <p className="text-red-600 text-sm">{errors.confirmPassword?.message}</p>
                    </fieldset>
                    
                    <div className="flex gap-4 text-base mt-2">
                        <button className="bg-white font-semibold w-30 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-400 hover:cursor-pointer">Cancelar</button>
                        <button type="submit" className="flex items-center justify-around bg-sky-800 font-semibold text-white w-50 h-10 rounded-lg hover:bg-sky-700 hover:cursor-pointer" disabled={isSubmitting}>
                            <FaRegSave />
                            {isSubmitting ? "Salvando..." : "Salvar alterações"}
                        </button>
                    </div>
                    {error && <p className="text-red-600 text-center pt-1 text-sm">{error}</p>}
                </div>
            </form>
        </section>
    )
}