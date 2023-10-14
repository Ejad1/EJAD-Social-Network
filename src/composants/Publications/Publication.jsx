import { useState } from "react";
import { PropTypes } from "prop-types";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import profile from '../../assets/person-circle.svg'
import { UpdatePublication } from "./UpdatePublication";

export function Publication({ id, content, imageSource, modifications, deletePub, addNotifs, handleDisplayNotification }) {
    const [pubContent, setPubContent] = useState(content);
    const [pubImageSource, setPubImageSource] = useState(imageSource);
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);
    const [update, setUpdate] = useState(false);

    const likeNotification = {
        title: "Like",
        content: "Vous avez liker la publication : " + id
    }

    const deleteNotification = {
        title: "Suppression",
        content: "Vous avez supprimer la publication : " + id 
    }

    const shareNotification = {
        title: "Partage",
        content: "Vous avez partager une publication"
    }

    const handleDeletePublication = () => {
        deletePub(id);
        addNotifs(deleteNotification);
        handleDisplayNotification(true);
    }

    const handleLike = () => {
        setLike(like + 1)
        addNotifs(likeNotification);
        handleDisplayNotification(true);
    }

    const handleShare = () => {
        setShare(share + 1);
        addNotifs(shareNotification);
        handleDisplayNotification(true);
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
            {/* <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack> */}
            <div className="publication">
                <div id="en-tete">
                    <img src={ profile } alt="Photo de profil" /> <h3>EJAD</h3>
                    <h2 id="close-publication" onClick={ handleDeletePublication }>X</h2>
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
                    handleDisplayNotification = { handleDisplayNotification }
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
    modifications: PropTypes.func.isRequired,
    deletePub: PropTypes.func.isRequired,
    handleDisplayNotification: PropTypes.func.isRequired
}
