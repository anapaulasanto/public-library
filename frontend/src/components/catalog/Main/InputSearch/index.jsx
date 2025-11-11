import React from "react";
import { IoSearch } from "react-icons/io5";

export const InputSearch = () => {
    return (
        <div className="flex  py-5 rounded-xl w-full mx-auto mt-10  items-center">
            <form className="w-full mx-auto flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Buscar livros, autores ou palavra-chave.. "
                    className="relative border border-gray-300 p-3 w-full pl-10 rounded-xl bg-neutral-50 text-gray-600 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 lg:w-[50%]"
                />
                <div className="w-[12%] p-3">
                    <select defaultValue="Livro" className="select rounded-xl border border-neutral-300 outline-none bg-neutral-100 shadow text-sm cursor-pointer">
                        <option>Livro</option>
                        <option>Autor</option>
                        <option>Palavra-chave</option>
                    </select>
                </div>
                <button type="submit" className="bg-sky-700 text-white p-3 ml-3 rounded-full text-sm font-semibold hover:bg-sky-600 transition-all duration-200 cursor-pointer">
                    <IoSearch />
                </button>
            </form>
        </div>
    )
};
