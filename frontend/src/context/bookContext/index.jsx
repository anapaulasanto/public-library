import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const BookContext = createContext(null)

export const BookContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('livros');
    const [activeTabRental, setActiveTabRental] = useState('alugueis');
    const [books, setBooks] = useState([]);

    const onTabChange = (tabId) => {
        setActiveTab(tabId);
        setActiveTabRental(tabId)
    }

    const deleteBook = async (idBook) => {
        try {
            await axios.delete(`/book/${idBook}`);
            console.log("Livro deletado", idBook);
            setBooks(prevBooks => prevBooks.filter(book => book.id !== idBook));

        } catch (error) {
            console.log("Erro ao deletar livro", error.message);

        }
    }

    useEffect(() => {
        const searchBooks = async () => {
            try {
                const { data } = await axios.get("/book/all");
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
            activeTabRental,
            onTabChange,
            books,
            deleteBook
        }}>
            {children}
        </BookContext.Provider>
    )
}