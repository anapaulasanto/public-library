import React from "react";
import NoImg from "../../../../../assets/no-img.png";

export const BookCover = ({ book }) => {
  return (
    <figure className="h-50 w-70">
      <img
        src={book?.img || NoImg}
        alt={`Livro ${book?.title || 'Sem título'}`}
        className="w-full  rounded-xl"
      />
    </figure>
  )
};
