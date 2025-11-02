import axios from "axios";

// =========== GET DE TODOS OS BOOKS =============
export const fetchBooks = async () => {
    const { data } = await axios.get("api/v1/book/all");
    console.log(data);
    return data;
}

// =========== DELETE BOOKS =============
export const deleteBook = async (bookId) => {
    const { data } = await axios.delete(`api/v1/book/${bookId}`);
    console.log(data);

    return data;
}