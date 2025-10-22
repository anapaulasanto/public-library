import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { ModalPassword } from "../../ModalPassword";


export const SectionSecurity = () => {
    return (
        <section className="my-10">
            <ContentTitle
                h1="Segurança"
                p="Gerencie sua senha"
            />
            <div className="flex justify-between border-b border-gray-300 py-5 my-7">
                <div className="flex flex-col">
                    <h3 className="font-bold">Senha</h3>
                    <p className="text-sm text-gray-500">Trocar a senha</p>
                </div>
                <ModalPassword />
            </div>
        </section>
    )
}