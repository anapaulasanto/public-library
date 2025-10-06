import { MenuItems } from "../../../../data/MenuBar";
import { AppContext } from "../../../../context";
import { useContext } from "react";

export function ItemsMenuBar() {
    const { activeTab, onTabChange } = useContext(AppContext);

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
                    </button>
                </li>
            ))
            }
        </>
    )
}