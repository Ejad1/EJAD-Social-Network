import { useState } from "react";
import { PropTypes } from "prop-types";
import { UpdatePublication } from "./UpdatePublication";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export function Publication({ id, content, imageSource, modifications, deletePub, addNotifs }) {
    const [pubContent, setPubContent] = useState(content);
    const [pubImageSource, setPubImageSource] = useState(imageSource);
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);
    const [update, setUpdate] = useState(false);

    const likeNotification = {
        title: "Like",
        content: "Vous avez liker la publication : " + id
    }

    const dislikeNotification = {
        title: "Dislike",
        content: "Vous avez 'déliker' la publication : " + id
    }

    const deleteNotification = {
        title: "Suppression",
        content: "Vous avez supprimer la publication : " + id 
    }

    const shareNotification = {
        title: "Partage",
        content: "Vous avez partager une publication"
    }

    const handleDeletePublication = async () => {
        deletePub(id);
        addNotifs(deleteNotification);

        try {
            await axios.delete("http://localhost:3000/api/publications/delete/660ef0f9cadd35958bff5ee2");
        } catch (error) {
            console.log("Erreur lors de la suppression de la publication : ", error);
        }
    }

    const handleLike = async () => {
        like < 1 ? setLike(like + 1) : setLike(like - 1);
        like === 0 ? addNotifs(likeNotification) : addNotifs(dislikeNotification);

        let addLike = 0;
        like == 0 ? addLike = 1 : addLike = -1

        try {
            await axios.put('http://localhost:3000/api/publications/like/660eec33f9ce7333d510af09', { addLike })
        } catch (error) {
            console.log("Erreur lors de la mise à jour des like : ", error);
        }
    }

    const handleShare = async () => {
        share < 1 ? setShare(share + 1) : setShare(share - 1);
        addNotifs(shareNotification);

        let addShare = 0;
        share == 0 ? addShare = 1 : addShare = -1

        try {
            await axios.put('http://localhost:3000/api/publications/share/660eec33f9ce7333d510af09', { addShare });
        } catch (error) {
            console.log("Erreur lors de la mise à jour des share : ", error);
        }
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

    if (pubImageSource === null) {
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
    
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites"  onClick={ handleLike } sx={{ marginRight: '40%' }}>
                            { like } <FavoriteIcon />
                        </IconButton>
                        
                        <h2 onClick={ () => handleUpdateClick(!update) } style={{ cursor: "pointer", marginRight: '35%' }}>Modifier</h2>
    
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
                    ></UpdatePublication>
                }
            </>
        )
    }
    else {  
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

                    <CardActions disableSpacing sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <IconButton aria-label="add to favorites"  onClick={ handleLike }>
                            { like } <FavoriteIcon />
                        </IconButton>
                        
                        <h2 onClick={ () => handleUpdateClick(!update) } style={{ cursor: "pointer" }}>Modifier</h2>

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
                    ></UpdatePublication>
                }
            </>
        )
    }
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    addNotifs: PropTypes.func.isRequired,
    modifications: PropTypes.func.isRequired,
    deletePub: PropTypes.func.isRequired,
}
