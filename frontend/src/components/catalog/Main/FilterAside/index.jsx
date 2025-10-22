import React from "react";

export const Filter = () => {
  return (
      <div className="w-2/4 my-8">
          <p className="font-semibold text-sm">Filtro</p>
          <select defaultValue="Ordenar por" className="select rounded-xl mt-3 border border-gray-200 shadow bg-neutral-100 text-sm cursor-pointer outline-none ">
              <option disabled={true}>Ordenar por</option>
              <option>Relevância</option>
              <option>Mais recentes</option>
          </select>
      </div>
)
};
