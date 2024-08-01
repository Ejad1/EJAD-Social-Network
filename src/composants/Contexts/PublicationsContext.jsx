import { createContext, useState } from "react"
import { PropTypes } from "prop-types";

// Création du context
export const PublicationsContext = createContext();

// Fournisseur de context
export const PublicationProvider = ({ children }) => {
    const [publications, setPublications] = useState(null);

    return (
        <PublicationsContext.Provider value={{ publications, setPublications }}>
            { children }
        </PublicationsContext.Provider>
    )
}

PublicationProvider.propTypes = {
    children: PropTypes
}
