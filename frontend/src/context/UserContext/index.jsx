import axios from "axios";
import { createContext, useState } from "react"

export const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [rental, setRental] = useState([]);

    return (
        <UserContext.Provider value={{
            user,
            rental
        }}>
            {children}
        </UserContext.Provider>
    )
}