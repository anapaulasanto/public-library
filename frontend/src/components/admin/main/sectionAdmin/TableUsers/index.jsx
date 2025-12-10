import { FaCalendar, FaCalendarAlt, FaPencilAlt, FaTrashAlt, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ModalDeleteUser } from "../ModalDelete";
import { useAllUsers } from "../../../../../hooks/user/index.js";
import { formatDate } from "../../../../../utils/index.js";
import { Loading } from "../../../../Loading";
import { ModalEditUsers } from "../ModalEditUsers";

export const TableUsers = () => {
    const { data: users, isLoading, isError } = useAllUsers()

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <div className="mt-10 text-red-500">Erro ao carregar os usuarios.</div>;
    }

    // Ordenar usuários por data de criação (mais recentes primeiro)
    const sortedUsers = users ? [...users].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // Ordem decrescente (mais recentes primeiro)
    }) : [];

    return (
        <div className="overflow-auto h-[400px] mt-10 border border-neutral-200 rounded-xl">

            <table className="table">
                <thead>
                    <tr className="text-black">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Membro desde</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                <span className="flex items-center gap-1">
                                    <FaUser />
                                    {user.name}
                                </span>
                            </td>
                            <td>
                                <span className="flex items-center gap-1">
                                    <IoIosMail />
                                    {user.email}
                                </span>
                            </td>
                            <td>
                                <span className="flex items-center gap-1">
                                    <FaCalendarAlt />
                                    {formatDate(user.createdAt)}
                                </span>
                            </td>
                            <td>
                                <span className={`
                                                py-1 px-3 
                                                rounded-xl 
                                                text-white 
                                                text-xs 
                                                font-semibold
                                                ${user.role === 'ADMIN' ? "bg-blue-500" : "bg-green-500"}
                                            `}>
                                    {user.role === null ? 'USER' : user.role}
                                </span>
                            </td>
                            <td className="">
                                <ModalEditUsers
                                    h1="Editar usuário"
                                    p="Edite informações do usuário"
                                    modalId={`modal_edit_${user.id}`}
                                    defaultName={user.name}
                                    defaultEmail={user.email}
                                    userId={user.id}
                                />
                                <ModalDeleteUser
                                    modalId={`modal_delete_${user.id}`}
                                    userId={user.id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}