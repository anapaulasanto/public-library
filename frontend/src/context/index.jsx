import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const BookContext = createContext(null)

export const BookContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('livros');
    const [books, setBooks] = useState([]);

    const onTabChange = (tabId) => {
        setActiveTab(tabId);
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
        <BookContext.Provider value={{ activeTab, setActiveTab, onTabChange, books }}>
            {children}
        </BookContext.Provider>
    )
}