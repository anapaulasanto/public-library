import axios from "axios";
import { createContext, useState } from "react"

export const CatalogContext = createContext(null)

export const CatalogContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('biblioteca');

    const onTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    return (
        <CatalogContext.Provider value={{
            activeTab,
            setActiveTab,
            onTabChange,
        }}>
            {children}
        </CatalogContext.Provider>
    )
}