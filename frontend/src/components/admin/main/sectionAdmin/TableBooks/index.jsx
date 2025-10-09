import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { BookContext } from "../../../../../context";

export function TableBooks() {
    const { books } = useContext(BookContext);

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
                            <td>
                                <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaTrashAlt /></button>
                                <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaPencilAlt /></button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}