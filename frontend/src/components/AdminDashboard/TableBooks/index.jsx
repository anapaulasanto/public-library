import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export function TableBooks() {
    return (
        <div className="overflow-x-auto rounded-box border border-neutral-200 bg-base-100 mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Livro</th>
                        <th>Categoria</th>
                        <th>Autor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td className="flex gap-3">
                            <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaPencilAlt /></button>
                            <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaTrashAlt /></button>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td className="flex gap-3">
                            <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaPencilAlt /></button>
                            <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaTrashAlt /></button>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td className="flex gap-3">
                            <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaPencilAlt /></button>
                            <button className="hover:bg-blue-200 p-2 rounded-lg cursor-pointer"><FaTrashAlt /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}