import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { Link } from "react-router-dom";

export function SectionSettings() {
    return (
        <section>
            <div className="flex items-center gap-3">
                <Link to="/user/profile">
                    <FaArrowAltCircleLeft size={26} />
                </Link>
                <ContentTitle
                    h1="Configurações da Conta"
                    p="Gerencie suas informações pessoais"
                />
            </div>
            <fieldset className="fieldset gri grid-cols-2 gap-10 bg-base-200 border-base-300 rounded-box w-full border p-4 my-10">
                <fieldset>
                    <legend className="fieldset-legend text-base">Nome completo</legend>
                    <input type="text" className="input w-full" value="Ana paula de araujo santo" />
                </fieldset>
                <fieldset>
                    <legend className="fieldset-legend text-base">Email</legend>
                    <input type="text" className="input w-full" value="ana.paula@gmail.com" />
                </fieldset>
                <fieldset>
                    <legend className="fieldset-legend text-base">Telefone</legend>
                    <input type="text" className="input w-full" value="(85)98705-2066" />
                </fieldset>
                <div className="flex gap-4 text-base justify-end mt-2">
                    <button className="bg-white font-semibold w-30 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-400 hover:cursor-pointer">Cancelar</button>
                    <button className="flex items-center justify-around bg-sky-800 font-semibold text-white w-50 h-10 rounded-lg hover:bg-sky-700 hover:cursor-pointer">
                        <FaRegSave />
                        Salvar alterações
                    </button>
                </div>
            </fieldset>
        </section>
    )
}