import { MenuItems } from "../../../../data/MenuBar";
import { BookContext } from "../../../../context/bookContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ItemsMenuBar = () => {
    const { activeTab, onTabChange } = useContext(BookContext);
    const navigate = useNavigate()

    return (
        <>
            {MenuItems.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() => onTabChange(item.id)}
                        className={`rounded-lg w-3/4 hover:bg-slate-300 ml-3 font-semibold text-[1rem] mb-1 ${activeTab === item.id ? "bg-blue-300 text-white" : ""}`}
                    >
                        <div>{item.icon}</div>
                        <p className="ml-2">{item.menu}</p>
                        {activeTab === "catalogo" && (
                            navigate("/catalog/books")
                        )}
                    </button>
                </li>
            ))
            }
        </>
    )
}