import { useRef, useState } from "react"
import { PropTypes } from "prop-types";
import { Publication } from "./Publication";

export function NewPublication({ afficher }) {
    const [imageName, setImageName] = useState("No image has been selected");
    const [imageSelected, setImageSelected] = useState(false);
    const addImage = useRef(null);
    const [newPublicationText, setNewPublicationText] = useState("");
    const [newPublicationTextDisplayed, setNewPublicationTextDisplayed] = useState("");
    const [newPublicationImage, setNewPublicationImage] = useState(null);
    const [newPublicationImagePost, setNewPublicationImagePost] = useState(null);
    const [addNewPublication, setAddNewPublication] = useState(false);

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
        setNewPublicationImage(URL.createObjectURL(imageSource));
    }

    const handleNewPublicationTextChanging = (e) => {
        setNewPublicationText(e.target.value);
    }

    const handleSubmit = () => {
        if (newPublicationText != "") {
            setAddNewPublication(true);
            setNewPublicationTextDisplayed(newPublicationText);
            setNewPublicationText("");
            setImageName("No image has been selected");
            setImageSelected(false);
            setNewPublicationImagePost(newPublicationImage);
            setNewPublicationImage(null);
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
                <button type="submit" id="submit" onClick={ handleSubmit }>Publier</button>
            </div>

            { 
                addNewPublication 
                    && 
                <Publication 
                    content = { newPublicationTextDisplayed } 
                    imageSource = { newPublicationImagePost } 
                ></Publication> 
            }
        </div>
    )
}

NewPublication.propTypes = {
    afficher: PropTypes.func.isRequired
}
