import React from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../components/catalog/book";
import { Loading } from "../../components/Loading";
import { useBookId } from "../../hooks/book/index.js";

export const BookId = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useBookId(id);

  if (isLoading) return <Loading />;

  if (isError || !book) {
    return <div className="mt-10 text-center text-red-500">Livro não encontrado.</div>;
  }

  return <Book book={book} />;
};
