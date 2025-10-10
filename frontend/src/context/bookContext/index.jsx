import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { Toast } from "../../components/admin/main/Toast";

export const BookContext = createContext(null)

export const BookContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('livros');
    const [books, setBooks] = useState([]);

    const onTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const deleteBook = async (idBook) => {
        try {
            await axios.delete(`/book/${idBook}`);
            console.log("Livro deletado", idBook);
            setBooks(prevBooks => prevBooks.filter(book => book.id !== idBook));
            <Toast message="Livro excluído com sucesso!" />

        } catch (error) {
            console.log("Erro ao deletar livro", error.message);

        }
    }

    useEffect(() => {
        const searchBooks = async () => {
            try {
                const { data } = await axios.get("/book/all");
                console.log("resposta: ", data);
                setBooks(data);
            } catch (error) {
                console.log("erro ao buscar livros", error);
            }
        }
        searchBooks();
    }, []);


    return (
        <BookContext.Provider value={{
            activeTab,
            setActiveTab,
            onTabChange,
            books,
            deleteBook
        }}>
            {children}
        </BookContext.Provider>
    )
}