import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { Link } from "react-router-dom";
import { useUserProfile } from "../../../../hooks/user";
import { Loading } from "../../../Loading";

export const SectionSettings = () => {
    const { data: user, isLoading } = useUserProfile(9);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <section>
            <div className="flex items-center gap-3 w-full 2xl:w-[80%] mx-auto">
                <Link to="/user/profile">
                    <FaArrowAltCircleLeft size={26} />
                </Link>
                <ContentTitle
                    h1="Configurações da Conta"
                    p="Gerencie suas informações pessoais"
                />
            </div>
            <form action="">
                <fieldset className="fieldset gri grid-cols-2 gap-10 bg-base-200 border-base-300 rounded-box w-full 2xl:w-[80%] mx-auto border p-4 my-10">
                    <fieldset>
                        <legend className="fieldset-legend text-base">Nome completo</legend>
                        <input type="text" className="input w-full" defaultValue={user.name} />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend text-base">Email</legend>
                        <input type="email" className="input w-full" defaultValue={user.email} />
                    </fieldset>
                    <fieldset>
                        <legend className="fieldset-legend text-base">Telefone</legend>
                        <input type="text" className="input w-full" defaultValue="(85)98705-2066" />
                    </fieldset>
                    <div className="flex gap-4 text-base justify-end mt-2">
                        <button className="bg-white font-semibold w-30 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-400 hover:cursor-pointer">Cancelar</button>
                        <button className="flex items-center justify-around bg-sky-800 font-semibold text-white w-50 h-10 rounded-lg hover:bg-sky-700 hover:cursor-pointer">
                            <FaRegSave />
                            Salvar alterações
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}