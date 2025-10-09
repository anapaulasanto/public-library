import { LuBookA } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { BookContext } from "../../../../context";
import { useContext } from "react";

export function MenuPages() {
    const { activeTab, onTabChange } = useContext(BookContext);

    const pages = [
        {
            id: "livros",
            page: "Livros",
            icon: <LuBookA />
        }, {
            id: "usuarios",
            page: "Usuários",
            icon: <LuUsers />
        }, {
            id: "categorias",
            page: "Categorias",
            icon: <IoPricetagsOutline />
        }
    ]

    return (
        <ul className="menu menu-horizontal flex justify-center mx-auto rounded-box bg-neutral-200 mt-15 rounded-xl border border-gray-200 lg:w-5xl ">
            <li className="flex flex-row gap-2">
                {pages.map((item) => (
                    <button
                        key={item.id}
                        className={`lg:px-30 rounded-xl ${activeTab === item.id ? 'bg-blue-300 text-white' : ''}`}
                        onClick={() => onTabChange(item.id)}
                    >
                        {item.icon}
                        {item.page}
                    </button>
                ))}

            </li>
        </ul>
    )
}