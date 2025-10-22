import React from "react";

export const CategoriesSearch = () => {
    const categories = [
        {
            title: "Todos"
        }, {
            title: "Ficção",
            icon: "💻"
        }, {
            title: "Romance",
            icon: "❤",
        }, {
            title: "Terror",
            icon: "👻",
        }, {
            title: "Autoajuda",
            icon: "📘",
        }, {
            title: "Fantasia",
            icon: "🐉",
        }
    ];

    return (
        <div className="flex flex-col mt-6">
            <p className="font-semibold text-sm">Categoria</p>
            <div className="flex flex-wrap">
                {categories.map((category, index) => (
                    <div className="flex p-1.5 px-3 gap-1 border border-neutral-300 mt-4 rounded-lg text-center text-sm font-semibold bg-neutral-100 mr-2 shadow hover:cursor-pointer hover:bg-blue-200" key={index}>
                        <p>{category.icon}</p>
                        <p>{category.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};
