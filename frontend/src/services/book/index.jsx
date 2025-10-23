import axios from "axios";

export const fetchBooks = async () => {
    try {
        const { data } = await axios.get("/book/all");
        return data || [];
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        throw error;
    }
}

export const deleteBook = async (bookId) => {
    const { data } = await axios.delete(`/book/${bookId}`);
    return data;
}