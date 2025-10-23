import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { ModalEdit } from "../ModalEdit";
import { ModalDelete } from "../ModalDelete";
import { useAllUsers } from "../../../../../hooks/user";

export const TableUsers = () => {
    const { data: users, isLoading, isError } = useAllUsers()

    if (isLoading) {
        return <div className="mt-10">Carregando usuarios...</div>;
    }

    if (isError) {
        return <div className="mt-10 text-red-500">Erro ao carregar os usuarios.</div>;
    }

    return (
        <div className="overflow-x-auto mt-10 border border-neutral-200 bg-base-50">
                    <table className="table">
                        <thead>
                            <tr className="text-black">
                                <th>Id</th>
                                <th>Email</th>
                                <th>Nome</th>
                                <th>Membro desde</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.nome}</td>
                                    <td>{user.atualizado}</td>
                                    <td className="flex">
                                        <ModalEdit
                                            h1="Editar livro"
                                            p="Edite informações do livro"
                                            // modalId={`modal_edit_${user.id}`}
                                        />
                                        <ModalDelete
                                            h1="Tem certeza que deseja excluir esse livro?"
                                            p="Essa ação é irreversível"
                                            // acao={() => useDeleteBook(book.id)}
                                            // modalId={`modal_delete_${book.id}`}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
    )
}