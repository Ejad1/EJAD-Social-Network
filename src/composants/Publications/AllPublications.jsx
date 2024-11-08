import axios from "axios";
import { useContext } from "react";
import { PublicationsContext } from "../Contexts/PublicationsContext";

export async function AllPublications() {
    // Récupération du context des publications
    const { setPublications } = useContext(PublicationsContext);

    // Getting all the publications
    try {
        await axios.get("http://localhost:3000/api/publications/get")
            .then(response => {
            setPublications(response.data);
            })
            .catch(error => console.log("Une erreur s'est produite:", error));
    } catch (error) {
    console.log("Erreur lors de la récupération des publications : ", error);
    }
    
}
