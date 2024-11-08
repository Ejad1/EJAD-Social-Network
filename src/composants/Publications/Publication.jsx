<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { UpdatePublication } from "./UpdatePublication";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { marked } from "marked";
import { UserContext } from "../Contexts/UserDataContext";
import { PublicationsContext } from "../Contexts/PublicationsContext";

// Socket tools
import io from "socket.io-client";
const socket = io('http://localhost:3000');

export function Publication({ id, author, authorMail, content, imageSource }) {
    const { publications, setPublications } = useContext(PublicationsContext);

    const [pubContent, setPubContent] = useState(content);
    const [pubImageSource, setPubImageSource] = useState(imageSource);
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);
    const [update, setUpdate] = useState(false);

    // Handle like and share button
    const [hasLiked, setHasLiked] = useState(false);
    const [hasShared, setHasShared] = useState(false);

    // User informations
    const { userData } = useContext(UserContext);
    const userId = userData._id;

    let canDisplay = false;
    if (userData.email === authorMail) canDisplay = true;

    // Getting likes from the data base
    useEffect(() => {
        const gettingLikes = async () => {
            const response = await axios.get(`http://localhost:3000/api/publications/getlikes/${id}`);
            setLike(response.data);
        };
        gettingLikes();
    
        socket.on('likeUpdated', (data) => {
            if (data.pubId === id) {
                setLike(data.totalLikes);
            }
        });
    
        return () => {
            socket.off('likeUpdated');
        };
    }, [id]);


    // Getting shares from the data base
    useEffect(() => {
        const gettingShares = async () => {
            const response = await axios.get(`http://localhost:3000/api/publications/getshares/${id}`);
            setShare(response.data)
        };
        gettingShares();
    
        socket.on('shareUpdated', (data) => {
            if (data.pubId === id) {
                setShare(data.totalShares);
            }
        });
    
        return () => {
            socket.off('shareUpdated');
        };
    }, [id]);


    const handleDeletePublication = async () => {
        if (userData.email === authorMail) {
            try {
                await axios.delete(`http://localhost:3000/api/publications/delete/${id}`, { userId });

                socket.on('pubDeleted', (data) => {
                   setPublications(data.pubs);
                   console.log(publications);
                });
            
                return () => {
                    socket.off('pubDeleted');
                };
            } catch (error) {
                console.log("Erreur lors de la suppression de la publication : ", error);
            }
        }
    }

    const handleLike = async () => {
        try {
            await axios.put(`http://localhost:3000/api/publications/like/${id}`, { userId });
            setHasLiked(!hasLiked);
        } catch (error) {
            console.log("Erreur lors de la mise à jour des like : ", error);
        }
    }

    const handleShare = async () => {
        try {
            await axios.put(`http://localhost:3000/api/publications/share/${id}`, { userId });
            setHasShared(!hasShared);
        } catch (error) {
            console.log("Erreur lors de la mise à jour des share : ", error);
        }
    }

    const handleUpdateClick = (display) => {
        if (userData.email === authorMail) {
            setUpdate(display);
        }
    }

    const handleUpdatePubContent = (text) => {
        setPubContent(text)
    }

    const handleUpdatePubImage = (image) => {
        setPubImageSource(image);
    }

    const getFormattedText = (text) => {
        const rawMarkup = marked(text);
        return { __html: rawMarkup };
    };
 
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
                        canDisplay
                            &&
                        <IconButton aria-label="delete"  onClick={ handleDeletePublication }>
                            <DeleteIcon sx={{ color: 'red' }}></DeleteIcon>
                        </IconButton>
                    }
                    title= { author }
                    subheader="September 14, 2016"
                ></CardHeader>

                <CardContent sx={{ fontSize: 'large' }} dangerouslySetInnerHTML={ getFormattedText(pubContent) } >
                </CardContent>

                {
                    pubImageSource
                            &&
                    <CardMedia
                        component="img"
                        height="auto"
                        image={ pubImageSource }
                        alt="Publication Image"
                    ></CardMedia>
                }


                <CardActions disableSpacing sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <IconButton aria-label="add to favorites"  onClick={ handleLike }>
                        { like }
                        { hasLiked ? <FavoriteIcon color="error" /> : <FavoriteIcon/> }
                    </IconButton>
                    
                    {
                        canDisplay
                            &&
                        <h2 onClick={ () => handleUpdateClick(!update) } style={{ cursor: "pointer" }}>Modifier</h2>
                    }

                    <IconButton aria-label="share"  onClick={ handleShare }>
                        { share } { hasShared ? <ShareIcon color="primary" /> : <ShareIcon/> }
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
                ></UpdatePublication>
            }
        </>
    )
    
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    authorMail: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
}
=======
import { useContext, useState } from "react";
import { PropTypes } from "prop-types";
import { UpdatePublication } from "./UpdatePublication";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { marked } from "marked";
import { AllPublications } from "./AllPublications";
import { UserContext } from "../Contexts/UserDataContext";

export function Publication({ id, author, authorMail, content, imageSource }) {
    const [pubContent, setPubContent] = useState(content);
    const [pubImageSource, setPubImageSource] = useState(imageSource);
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);
    const [update, setUpdate] = useState(false);

    // User informations
    const { userData } = useContext(UserContext);


    const handleDeletePublication = async () => {
        if (userData.email === authorMail) {
            try {
                await axios.delete(`http://localhost:3000/api/publications/delete/${id}`);
                AllPublications();
            } catch (error) {
                console.log("Erreur lors de la suppression de la publication : ", error);
            }
        }
    }

    const handleLike = async () => {
        like < 1 ? setLike(like + 1) : setLike(like - 1);

        let addLike = 0;
        like == 0 ? addLike = 1 : addLike = -1

        try {
            await axios.put(`http://localhost:3000/api/publications/like/${id}`, { addLike });
            AllPublications();
        } catch (error) {
            console.log("Erreur lors de la mise à jour des like : ", error);
        }
    }

    const handleShare = async () => {
        share < 1 ? setShare(share + 1) : setShare(share - 1);

        let addShare = 0;
        share == 0 ? addShare = 1 : addShare = -1

        try {
            await axios.put(`http://localhost:3000/api/publications/share/${id}`, { addShare });
            AllPublications();
        } catch (error) {
            console.log("Erreur lors de la mise à jour des share : ", error);
        }
    }

    const handleUpdateClick = (display) => {
        if (userData.email === authorMail) {
            setUpdate(display);
        }
    }

    const handleUpdatePubContent = (text) => {
        setPubContent(text)
    }

    const handleUpdatePubImage = (image) => {
        setPubImageSource(image);
    }

    const getFormattedText = (text) => {
        const rawMarkup = marked(text);
        return { __html: rawMarkup };
    };

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
                        title= { author }
                        subheader="September 14, 2016"
                    ></CardHeader>

                    <CardContent sx={{ fontSize: 'large' }} dangerouslySetInnerHTML={ getFormattedText(pubContent) } >
                    </CardContent>

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
                    ></UpdatePublication>
                }
            </>
        )
    }
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    authorMail: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
