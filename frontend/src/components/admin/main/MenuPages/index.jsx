import { BookContext } from "../../../../context/bookContext";
import { useContext } from "react";

export function MenuPages({ page, activeTab }) {
    const { onTabChange } = useContext(BookContext);

    return (
        <ul className="menu menu-horizontal flex justify-center mx-auto rounded-box bg-neutral-200 mt-15 rounded-xl border border-gray-200 lg:w-5xl ">
            <li className="flex flex-row gap-2">
                {page.map((item) => (
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