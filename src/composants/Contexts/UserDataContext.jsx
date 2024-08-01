import { createContext, useState } from "react"
import { PropTypes } from "prop-types";

// Création du context
export const UserContext = createContext();

// Fournisseur de context
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            { children }
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes
}
