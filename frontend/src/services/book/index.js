import axios from "axios";

// =========== GET DE TODOS OS BOOKS =============
export const fetchBooks = async () => {
    const { data } = await axios.get("api/v1/book/all");
    console.log(data);
    return data;
}

// =========== CREATE BOOK =============
export const createBook = async (bookData) => {
    const { data } = await axios.post("api/v1/book", bookData);
    console.log("Livro criado: ", data);
    return data;
}

// =========== DELETE BOOKS =============
export const deleteBook = async (bookId) => {
    const { data } = await axios.delete(`api/v1/book/${bookId}`);
    console.log(data);
    return data;
}

// =========== UPDATE BOOK =============
export const updateBook = async (bookId, bookData) => {
    const { data } = await axios.put(`api/v1/book/${bookId}`, bookData);
    console.log("Livro atualizado: ", data);
    return data;
}

// =========== GET BOOK BY ID =============
export const getBookById = async (bookId) => {
    const { data } = await axios.get(`api/v1/book/${bookId}`);
    console.log("livro acessado: ", data);
    return data;
}

// =========== GET REVIEWS BY BOOK =============
export const getReviewsByBook = async (bookId) => {
    const { data } = await axios.get(`api/v1/book/${bookId}/reviews`);
    console.log("avaliacoes do livro ", data);
    return data;
}