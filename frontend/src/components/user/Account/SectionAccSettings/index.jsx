import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { Link } from "react-router-dom";
import { Loading } from "../../../Loading";


export const SectionSettings = ({ redirectTo, defaultName, defaultEmail, isLoading }) => {
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
            <form action="">
                <div className="fieldset grid grid-cols-2 gap-10 bg-base-200 border-base-300 rounded-box w-full 2xl:w-[80%] mx-auto border p-4 my-10">
                    <fieldset>
                        <legend className="fieldset-legend text-base">Nome completo</legend>
                        <input type="text" className="input w-full" defaultValue={defaultName} />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend text-base">Email</legend>
                        <input type="email" className="input w-full" defaultValue={defaultEmail} />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend text-base">Nova senha</legend>
                        <input type="password" className="input w-full" placeholder="*********" />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend text-base">Confirmar senha</legend>
                        <input type="password" className="input w-full" placeholder="*********" />
                    </fieldset>
                    <div className="flex gap-4 text-base mt-2">
                        <button className="bg-white font-semibold w-30 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-400 hover:cursor-pointer">Cancelar</button>
                        <button className="flex items-center justify-around bg-sky-800 font-semibold text-white w-50 h-10 rounded-lg hover:bg-sky-700 hover:cursor-pointer">
                            <FaRegSave />
                            Salvar alterações
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}