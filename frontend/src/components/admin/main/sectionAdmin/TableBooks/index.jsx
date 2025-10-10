import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { BookContext } from "../../../../../context/bookContext";
import { ModalDelete } from "../ModalDelete";
import { ModalEdit } from "../ModalEdit";

export function TableBooks() {
    const { books, deleteBook } = useContext(BookContext);

    return (
        <div className="overflow-x-auto mt-10">
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
                                <ModalDelete
                                    h1="Tem certeza que deseja excluir esse livro?"
                                    p="Essa ação é irreversível"
                                    acao={() => deleteBook(book.id)}
                                    modalId={`modal_delete_${book.id}`}
                                />
                                <ModalEdit
                                    h1="Editar livro"
                                    p="Edite informações do livro"
                                    modalId={`modal_edit_${book.id}`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}