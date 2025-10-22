import React from "react";
import { IoSearch } from "react-icons/io5";

export const InputSearch = () => {
    return (
        <div className="flex border border-gray-300 bg-neutral-200 py-5 rounded-xl w-[95%] mx-auto mt-10  items-center">
            <form className="w-[85%] mx-auto flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Buscar livros, autores ou palavra-chave.. "
                    className="relative border border-gray-300 p-3 w-full pl-10 rounded-xl bg-neutral-50 text-gray-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 lg:w-[50%]"
                />
                <div className="w-[12%] p-3">
                    <select defaultValue="Livro" className="select rounded-xl border border-neutral-300 outline-none bg-neutral-100 shadow text-sm cursor-pointer">
                        <option disabled={true}>Livro</option>
                        <option>Autor</option>
                        <option>Palavra-chave</option>
                    </select>
                </div>
                <button type="submit" className="bg-gradient text-white p-3 ml-3 rounded-lg text-sm font-semibold hover:bg-blue-600 cursor-pointer hover:p-3.5 transition-all duration-300">
                    <IoSearch />
                </button>
            </form>
        </div>
    )
};
