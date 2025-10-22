import { ContentTitle } from "../../../AdminDashboard/ContentTitle";
import { TableUsers } from "../TableUsers";

export const SectionTableUsers = () => {
    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-15 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
                <ContentTitle h1="Usuários cadastrados" p="Lista de usuários registrados na biblioteca" />
            </div>
        <TableUsers />
        </section>
    )
}