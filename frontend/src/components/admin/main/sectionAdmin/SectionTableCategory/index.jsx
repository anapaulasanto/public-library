import { ContentTitle } from "../../../AdminDashboard/ContentTitle";
import { TableCategory } from "../TableCategory";
import { ModalAddCategory } from "../ModalAddCategory";

export const SectionTableCategory = () => {
    return (
        <section className="p-8 mt-12 w-[90%] bg-neutral-50/40 mt-15 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
                <ContentTitle h1="Gerenciar categorias" p="Adicione, edite ou remova categorias de livros do catálogo" />
                <ModalAddCategory
                    modalId="modal_add_category"
                    h1="Adicionar categoria"
                    p="Preencha os dados para criar uma nova categoria"
                />
            </div>


            <TableCategory />
        </section>
    )
}