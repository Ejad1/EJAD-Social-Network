import { useRef, useState } from "react"
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";

export function UpdatePublication({ id, content, image, updateContent, updateImage, afficher, notif, publicationArrayUpdate }) {
    const addImage = useRef(null);
    const [publicationText, setPublicationText] = useState(content);
    const [publicationImage, setPublicationImage] = useState(image);
    const [imageName, setImageName] = useState("No image has been selected");

    // Image name if it exist
    if (image !== null) {
        const parts = image.split('/');
        setImageName(parts[parts.length - 1]);
    }

    // Notification text
    const updateNotification = {
        title: "Modification",
        content: "Vous avez modifier la publication : " + id
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
        const imageSource = e.target.files[0];
        setPublicationImage(URL.createObjectURL(imageSource));
    }

    const handlePublicationTextUpdating = (e) => {
        setPublicationText(e.target.value);
    }

    const handleSubmit = () => {
        if (publicationText != "") {
            notif(updateNotification);
            updateContent(publicationText);
            updateImage(publicationImage);
            publicationArrayUpdate(id, publicationText, publicationImage);
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
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    afficher: PropTypes.func.isRequired,
    notif: PropTypes.func.isRequired,
    updateContent: PropTypes.func.isRequired,
    updateImage: PropTypes.func.isRequired,
    publicationArrayUpdate: PropTypes.func.isRequired
}
