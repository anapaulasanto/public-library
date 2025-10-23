import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const BookContext = createContext(null)

export const BookContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('livros');
    const [activeTabRental, setActiveTabRental] = useState('alugueis');

    const onTabChange = (tabId) => {
        setActiveTab(tabId);
        setActiveTabRental(tabId)
    }

    return (
        <BookContext.Provider value={{
            activeTab,
            setActiveTab,
            activeTabRental,
            onTabChange,
        }}>
            {children}
        </BookContext.Provider>
    )
}