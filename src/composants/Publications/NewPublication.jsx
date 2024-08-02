import { useRef, useState } from "react"
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";
import axios from "axios";

export function NewPublication({ afficher, author, authorMail }) {
    const [imageName, setImageName] = useState("No image has been selected");
    const [imageSelected, setImageSelected] = useState(false);
    const addImage = useRef(null);
    const [newPublicationText, setNewPublicationText] = useState("");
    const [newPublicationImage, setNewPublicationImage] = useState(null);

    const handleClose = () => {
        afficher(false);
    }

    const handleAddImageClick = () => {
        if (addImage.current) {
            addImage.current.click();
        }
    }

    const handleImageChange = (e) => {
        setImageName(e.target.files[0].name)
        setImageSelected(true);
        const imageSource = e.target.files[0];
        setNewPublicationImage(imageSource);
    }

    const handleNewPublicationTextChanging = (e) => {
        e.target.value.split('\n').join(<br></br>);

        setNewPublicationText(e.target.value);
    }

    const handleSubmit = async () => {
        if (newPublicationText !== "") {
            const myDate = new Date();
    
            // Créez une instance de FormData
            const formData = new FormData();
            formData.append('profilPhoto', "Nothing");
            formData.append('author', author);
            formData.append('authorMail', authorMail);
            formData.append('dateMake', myDate);
            formData.append('pubText', newPublicationText);
            formData.append('like', 0);
            formData.append('share', 0);
    
            // Ajoutez l'image si elle existe
            if (newPublicationImage) {
                formData.append('image', newPublicationImage);
            }
    
            // Envoi de la publication avec axios
            try {
                await axios.post("http://localhost:3000/api/publications/create", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } catch (error) {
                console.log("Erreur lors de la création d'une publication : ", error);
            }
    
            // Réinitialiser les états du formulaire
            setNewPublicationText("");
            setImageName("No image has been selected");
            setImageSelected(false);
            setNewPublicationImage(null);
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
                onChange={ handleNewPublicationTextChanging }
                value={ newPublicationText }
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
                    <p className = { `${imageSelected ? 'imageSelected' : ''}` }>{ imageName }</p>
                </div>
                
                <Button 
                    variant="contained"
                    onClick={ handleSubmit }
                    sx={{ marginTop: '1%', marginLeft: '47%', transform: 'translateX(-50%)' }}
                >Publier</Button>
            </div>
        </div>
    )
}

NewPublication.propTypes = {
    afficher: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired,
    authorMail: PropTypes.string.isRequired,
}
