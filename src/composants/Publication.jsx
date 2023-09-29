import { useState } from "react";
import { PropTypes } from "prop-types";
import profile from '../assets/person-circle.svg'
import { UpdatePublication } from "./UpdatePublication";

export function Publication({ id, content, imageSource, modifications, addNotifs }) {
    const [pubContent, setPubContent] = useState(content);
    const [pubImageSource, setPubImageSource] = useState(imageSource);
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);
    const [update, setUpdate] = useState(false);

    const likeNotification = {
        title: "Like",
        content: "Vous avez liker une publication"
    }

    const handleLike = () => {
        setLike(like + 1)
        addNotifs(likeNotification);
    }

    const handleShare = () => {
        setShare(share + 1)
    }

    const handleUpdateClick = (display) => {
        setUpdate(display);
    }

    const handleUpdatePubContent = (text) => {
        setPubContent(text)
    }

    const handleUpdatePubImage = (image) => {
        setPubImageSource(image);
    }

    return (
        <>
            <div className="publication">
                <div id="en-tete">
                    <img src={ profile } alt="Photo de profil" /> <h3>EJAD</h3>
                    <h2 id="close-publication">X</h2>
                </div>
                <p>
                    { pubContent }
                </p>
                { imageSource && <img src={ pubImageSource } alt="Image de la publication" id='image-publication'></img> }
                <div id='bas'>
                    <h3 onClick={ handleLike }>{ like } 👍</h3>
                    <h3 onClick={ () => handleUpdateClick(!update) }>Modifier</h3>
                    <h3 onClick={ handleShare }>{ share } Partages</h3>
                </div>
            </div>

            {   update 
                    && 
                <UpdatePublication
                    id = { id }
                    content = { content }
                    updateContent = { handleUpdatePubContent }
                    image = { imageSource }
                    updateImage = { handleUpdatePubImage }
                    afficher = { handleUpdateClick }
                    notif = { addNotifs }
                    publicationArrayUpdate = { modifications }
                ></UpdatePublication>
            }
        </>
    )
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    addNotifs: PropTypes.func.isRequired,
    modifications: PropTypes.func.isRequired
}
