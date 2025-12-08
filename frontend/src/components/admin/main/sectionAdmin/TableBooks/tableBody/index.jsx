import React from "react";
import { ModalEditBooks } from "../../ModalEditBooks";
import { ModalDeleteBooks } from "../../ModalDeleteBooks";

export const TBody = ({ books }) => {
    return (
        <tbody>
            {books?.map((book) => (
                <tr key={book.id} className="h-full">
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-square h-24 w-15">
                                    
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{book.title}</div>
                                <div className="text-sm opacity-50">{book.year}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-sm bg-purple-800 text-white">{book.categoryName || book.category}</span>
                    </td>
                    <td>{book.author}</td>
                    <td>
                        <ModalEditBooks
                            key={`edit_${book.id}`}
                            h1="Editar livro"
                            p="Atualize os dados do livro"
                            modalId={`modal_edit_${book.id}`}
                            cover={book.img}
                            title={book.title}
                            author={book.author}
                            category={book.categoryName || book.category}
                            year={book.year}
                            isbn={book.isbn}
                            description={book.description}
                            bookId={book.id}
                        />
                        <ModalDeleteBooks
                            modalId={`modal_delete_${book.id}`}
                            bookId={book.id}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
