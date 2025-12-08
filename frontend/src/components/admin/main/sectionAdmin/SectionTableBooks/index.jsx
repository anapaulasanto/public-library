import { ContentTitle } from "../../../AdminDashboard/ContentTitle";
import { ModalAddBook } from "../ModalAddBook";
import { TableBooks } from "../TableBooks";
import { useBooksAdmin } from "../../../../../hooks/book/index.js";

export const SectionTableBooks = () => {
    const { data: books, isLoading, isError } = useBooksAdmin();

    return (
        <section className="p-8 w-[90%] bg-neutral-50/40 my-15 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
                <ContentTitle h1="Gerenciar livros" p="Adicione, edite ou remova livros." />
                <ModalAddBook
                    modalId="modal_add_new_book"
                    h1="Adicionar Novo Livro"
                    p="Preencha as informações para cadastrar um novo livro no acervo."
                />
            </div>
            {isLoading ? (
                <div className="text-center mt-10">Carregando livros...</div>
            ) : isError ? (
                <div className="text-center mt-10 text-red-500">Erro ao carregar livros.</div>
            ) : (
                <TableBooks books={books} />
            )}
        </section>
    )
}