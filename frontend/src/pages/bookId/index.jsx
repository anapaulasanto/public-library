import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Book } from "../../components/catalog/book";
import { Loading } from "../../components/Loading";
import { books as mockBooks } from "../../data/cardBook";

export const BookId = () => {
  const { id } = useParams();
  const location = useLocation();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Primeiro, tenta obter o livro do state passado pela navegação
    if (location.state?.book) {
      setBook(location.state.book);
      setIsLoading(false);
      return;
    }

    // Se não houver state, busca do localStorage
    const storedBooks = localStorage.getItem('books');
    const books = storedBooks ? JSON.parse(storedBooks) : mockBooks;
    const foundBook = books.find(b => b.id === Number(id));
    
    setBook(foundBook);
    setIsLoading(false);
  }, [id, location.state]);

  if (isLoading) return <Loading />;

  if (!book) {
    return <div className="mt-10 text-red-500">Livro não encontrado.</div>;
  }

  return <Book book={book} />;
};
