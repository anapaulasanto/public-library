import { BookContext } from "../../../../context/BookContext";
import { useContext } from "react";

export const MenuPages = ({ page, activeTab }) => {
    const { onTabChange } = useContext(BookContext);

    return (
        <ul className="menu menu-horizontal w-[90%] flex justify-center mx-auto rounded-box bg-neutral-200 mt-15 rounded-xl border border-gray-200  ">
            <li className="flex flex-row gap-2 ">
                {page.map((item) => (
                    <button
                        key={item.id}
                        className={`px-30 2xl:px-50 rounded-xl ${activeTab === item.id ? 'bg-blue-300 text-white' : ''}`}
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