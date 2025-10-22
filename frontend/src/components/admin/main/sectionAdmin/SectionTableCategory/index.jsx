import { ContentTitle } from "../../../AdminDashboard/ContentTitle";
import { TableCategory } from "../TableCategory";

export const SectionTableCategory = () => {
    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-15 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
                <ContentTitle h1="Gerenciar categorias" p="Adicione, edite ou remova categorias de livros do catálogo" />
                <button className="bg-blue-300 text-sm h-10 w-40 rounded-md font-semibold text-white shadow-md" >+ Adicionar categoria</button>
            </div>
        <TableCategory />
        </section>
    )
}