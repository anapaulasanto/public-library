import React, { useContext } from "react";
import { GiBookshelf } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { CatalogContext } from "../../../context/CatalogContext";

export const TabPages = () => {
    const { activeTab, onTabChange } = useContext(CatalogContext);

    const pages = [
        {
            id: "biblioteca",
            page: "Biblioteca Local",
            icon: <GiBookshelf />
        }, {
            id: "google",
            page: "Google Books",
            icon: <TfiWorld />
        }
    ]

    return (
        <ul className="menu menu-horizontal w-[35%] py-2 flex justify-center mx-auto rounded-box bg-neutral-100 mt-20 rounded-xl border border-gray-200 shadow shadow-lg">
            <li className="flex flex-row gap-2 ">
                {pages.map((item) => (
                    <button
                        key={item.id}
                        className={`px-12 py-4 2xl:px-20 rounded-xl font-semibold ${activeTab === item.id ? 'bg-sky-800 text-white' : ''}`}
                        onClick={() => onTabChange(item.id)}
                    >
                        {item.icon}
                        {item.page}
                    </button>
                ))}

            </li>
        </ul>
    )
};
