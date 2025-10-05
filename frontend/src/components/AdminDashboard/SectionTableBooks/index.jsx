import { ContentTitle } from "../ContentTitle";
import { TableBooks } from "../TableBooks";

export function SectionTableBooks() {
    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-15 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
                <ContentTitle h1="Gerenciar livros" p="Adicione, edite ou remova livros do catálogo" />
                <button className="bg-blue-300 text-sm h-10 w-30 rounded-md font-semibold text-white shadow-md" >+ Adicionar livro</button>
            </div>
            <TableBooks />
        </section>
    )
}