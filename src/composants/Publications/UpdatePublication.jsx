import { useContext, useRef, useState } from "react"
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";
import axios from "axios";
import { PublicationsContext } from "../Contexts/PublicationsContext";

// Socket tools
import io from "socket.io-client"
const socket = io("http://localhost:3000");

export function UpdatePublication({ id, content, image, updateContent, updateImage, afficher }) {
    const { setPublications } = useContext(PublicationsContext);

    const addImage = useRef(null);
    const [publicationText, setPublicationText] = useState(content);
    const [publicationImage, setPublicationImage] = useState(image);
    const [imageName, setImageName] = useState("No image has been selected");

    const [imageNull, setImageNull] = useState(true);

    // Image name if it exist
    if (image !== null && imageNull) {
        setImageNull(false);
        const parts = image.split('/');
        setImageName(parts[parts.length - 1]);
    }

    const handleClose = () => {
        afficher(false);
    }

    const handleAddImageClick = () => {
        if (addImage.current) {
            addImage.current.click();
        }
    }

    const handleImageChange = (e) => {
        setImageName(e.target.files[0].name);
        setPublicationImage(e.target.files[0]);
    }

    const handlePublicationTextUpdating = (e) => {
        setPublicationText(e.target.value);
    }

    const handleSubmit = async () => {
        if (publicationText != "") {

             // Créez une instance de FormData
             const formData = new FormData();
             formData.append('id', id);
             formData.append('pubText', publicationText);
             formData.append('update', true);
             formData.append('dateUpdate', new Date());
     
             // Ajoutez l'image si elle existe
             if (publicationImage) {
                 formData.append('image', publicationImage);
             }

            try {
                afficher(false);

               const response = await axios.put("http://localhost:3000/api/publications/update", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const { imageUrl, pubText } = response.data;
                updateContent(pubText);
                updateImage(imageUrl);

                // Réception de l'évènement
                socket.on("pubUpdated", (data) => {
                    setPublications(data.pubs);
                })
                return () => {
                    socket.off("pubUpdated");
                }
            } catch (error) {
                // Si une erreur survient lors de la requête POST
                if (error.response) {
                    // La requête a été effectuée mais le serveur a répondu avec un code d'erreur
                    console.error("Erreur de réponse du serveur:", error.response.data);
                } else if (error.request) {
                    // La requête a été effectuée mais aucune réponse n'a été reçue
                    console.error("Pas de réponse du serveur");
                } else {
                    // Une erreur s'est produite lors de la configuration de la requête
                    console.error("Erreur lors de la configuration de la requête:", error.message);
                }
            }

            afficher(false);
        }
    }

    return (
        <div className="new-publication">
            <h3 id="close" onClick={handleClose}>X</h3>
            <h3 id="title">Contenu de la publication</h3>
            <textarea 
                name="publication-text" 
                id="publication-text" 
                cols="40" rows="8" 
                placeholder="@le contenu de votre publication"
                onChange={ handlePublicationTextUpdating }
                value={ publicationText }
            >
            </textarea>
            <div className="my_buttons">
                <div className="input-image">
                    <label htmlFor="my_image" onClick={ handleAddImageClick }>Ajouter une image</label>
                    <input 
                        ref={ addImage }
                        onChange={ handleImageChange }
                        name="my_image" type="file" 
                        accept="image/*" 
                        placeholder="Mon image"
                    />
                    <p className ='imageSelected'>{ imageName }</p>
                </div>

                <Button 
                    variant="contained"
                    onClick={ handleSubmit }
                    sx={{ marginTop: '1%', marginLeft: '47%', transform: 'translateX(-50%)' }}
                >Modifier</Button>
            </div>
        </div>
    )
}

UpdatePublication.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    afficher: PropTypes.func.isRequired,
    updateContent: PropTypes.func.isRequired,
    updateImage: PropTypes.func.isRequired,
}