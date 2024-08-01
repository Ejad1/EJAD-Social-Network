import axios from "axios";
import { useContext, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Publication } from './Publications/Publication'
import '../css/Main.css'
import { PublicationsContext } from "./Contexts/PublicationsContext";

export function Main({ notifsArray, state, pubModification, pubDelete }) {
    // Récupération du context des publications
    const { publications, setPublications } = useContext(PublicationsContext);

    useEffect(() => {
        const fetchData = async () => {
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

        fetchData();
    }, [publications, setPublications]);    
   
    return (
        <main>
            {
                <>
                    {
                        publications ?
                        publications.map(aPublication =>
                            <Publication
                                key = { aPublication._id }
                                id = { aPublication._id }
                                content = { aPublication.pubText }
                                imageSource = { aPublication.pubImage }
                                modifications = { pubModification }
                                deletePub = { pubDelete }
                                addNotifs = { notifsArray }
                                state = { state }
                            />
                        )
                        : <p>No publications available</p>
                    }
                </>
            }    
        </main>
    )
}

Main.propTypes = {
    notifsArray: PropTypes.func.isRequired,
    state: PropTypes.bool.isRequired,
    pubModification: PropTypes.func.isRequired,
    pubDelete: PropTypes.func.isRequired
}
