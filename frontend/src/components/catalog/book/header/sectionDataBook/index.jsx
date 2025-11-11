import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { LuUserRoundPen } from "react-icons/lu";

export const SectionDataBook = ({ book }) => {
  return (
    <section className="grid grid-cols-3 pt-10">
      <div className="flex gap-1 w-full items-center">
        <LuUserRoundPen size={18} />
        <h1 className="font-bold">Autor</h1>
        <p className="">{book.author}</p>
      </div>

      <div className="flex gap-1  items-center">
        <CiCalendarDate size={18} />
        <h1 className="font-bold">Ano</h1>
        <p className="">{book.year}</p>
      </div>

      <div className="flex gap-1  items-center">
        <CiEdit size={18} />
        <h1 className="font-bold">ISBN</h1>
        <p className="">{book.isbn}</p>
      </div>
    </section>
  )
};
