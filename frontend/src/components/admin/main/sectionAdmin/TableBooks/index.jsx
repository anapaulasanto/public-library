import { ModalDelete } from "../ModalDelete";
import { ModalEdit } from "../ModalEdit";
import { useBooksAdmin, useDeleteBook } from "../../../../../hooks/book";

export const TableBooks = () => {
    const { data: books, isLoading, isError } = useBooksAdmin()
    const { mutate: deleteBook} = useDeleteBook()

    if (isLoading) {
        return <div className="mt-10">Carregando livros...</div>;
    }

    if (isError) {
        return <div className="mt-10 text-red-500">Erro ao carregar os livros.</div>;
    }

    return (
        <div className="overflow-auto h-1/2 mt-10 border border-neutral-200 bg-white/70 rounded-xl">
            <table className="table">
                <thead>
                    <tr className="text-black">
                        <th>Livro</th>
                        <th>Categoria</th>
                        <th>Ano</th>
                        <th>Autor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.categoryName}</td>
                            <td>{book.year}</td>
                            <td>{book.author}</td>
                            <td className="flex">
                                <ModalEdit
                                    h1="Editar livro"
                                    p="Edite informações do livro"
                                    modalId={`modal_edit_${book.id}`}
                                />
                                <ModalDelete
                                    h1="Tem certeza que deseja excluir esse livro?"
                                    p="Essa ação é irreversível"
                                    acao={() => deleteBook(book.id)}
                                    modalId={`modal_delete_${book.id}`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}