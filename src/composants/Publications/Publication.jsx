import { useState } from "react";
import { PropTypes } from "prop-types";
import { UpdatePublication } from "./UpdatePublication";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <Card sx={{ border: '2px solid #2196F3', backgroundColor: 'azure', marginTop: '5%', marginBottom: '10%' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            E
                        </Avatar>
                    }
                    action={
                    <IconButton aria-label="delete"  onClick={ handleDeletePublication }>
                        <DeleteIcon sx={{ color: 'red' }}></DeleteIcon>
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                ></CardHeader>

                <CardContent sx={{ fontSize: 'large' }}>{ pubContent }</CardContent>

                <CardMedia 
                    component="img"
                    height="auto"
                    image={ pubImageSource }
                    alt="Publication Image"
                ></CardMedia>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites"  onClick={ handleLike }>
                        { like } <FavoriteIcon />
                    </IconButton>
                    
                    <h2 onClick={ () => handleUpdateClick(!update) } style={{ cursor: "pointer"}}>Modifier</h2>

                    <IconButton aria-label="share"  onClick={ handleShare }>
                        { share } <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>

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
