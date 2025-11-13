import { ModalEditBooks } from "../ModalEditBooks";
import { useBooksAdmin, useDeleteBook } from "../../../../../hooks/book/index.js";
import { Loading } from "../../../../Loading"
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

export const TableBooks = () => {
    const { data: books, isLoading, isError } = useBooksAdmin()
    const { handleDeleteBook, error } = useDeleteBook()

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <div className="mt-10 text-red-500">Erro ao carregar os livros.</div>;
    }

    return (
        <div className="overflow-auto h-[400px] mt-10 border border-neutral-200 bg-white/70 rounded-xl">
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
                            <td>
                                <span className="flex items-center gap-1">
                                    <FaBook />
                                    {book.title}
                                </span>
                            </td>
                            <td>
                                <span className="flex justify-center py-1 px-3 
                                                rounded-xl 
                                                text-white 
                                                text-xs 
                                                font-semibold
                                                bg-purple-800">
                                    {book.categoryName}
                                </span>
                            </td>
                            <td>
                                <span className="flex items-center gap-1">
                                    <FaCalendarAlt />
                                    {book.year}
                                </span>
                            </td>
                            <td>
                                <span className="flex items-center gap-1">
                                    <FaUserEdit />
                                    {book.author}
                                </span>
                            </td>
                            <td className="flex">
                                <ModalEditBooks
                                    h1="Editar livro"
                                    p="Atualize os dados do livro"
                                    modalId={`modal_edit_${book.id}`}
                                    defaultValue1={book.title}
                                    defaultValue2={book.author}
                                    defaultValue3={book.categoryName}
                                    defaultValue4={book.year}
                                />
                                {/* <ModalDelete
                                    h1="Tem certeza que deseja excluir esse livro?"
                                    p="Essa ação é irreversível"
                                    acao={() => handleDeleteBook(book.id)}
                                    modalId={`modal_delete_${book.id}`}
                                /> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}