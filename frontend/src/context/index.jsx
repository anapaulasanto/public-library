import { createContext, useState } from "react"

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
    function onTabChange(tabId) {
        setActiveTab(tabId);
    }

    const [activeTab, setActiveTab] = useState('livros')

    return (
        <AppContext.Provider value={{ activeTab, setActiveTab, onTabChange }}>
            {children}
        </AppContext.Provider>
    )
}