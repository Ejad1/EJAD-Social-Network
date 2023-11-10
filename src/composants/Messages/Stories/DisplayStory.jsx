import { PropTypes } from "prop-types";
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import storyVideo from '../../../assets/Dan Romer - Ending Theme [THE GOOD DOCTOR SOUNDTRACK].mp4'
import storyImage from '../../../assets/story.jpg'
import StoryCarousel from "./StoryCarousel";

export default function DisplayStory({ maStory }) {

    if (maStory.display) {
        return (
            <div>
                <Card sx={{ position: 'relative', left: '7%', overflowY: 'auto' }}>
                    <CardHeader
                        avatar= { <Avatar>{ maStory.story.nom[0] }</Avatar> }
                        action= {
                            <IconButton aria-label="delete">
                                <CloseIcon sx={{ color: 'red' }}></CloseIcon>
                            </IconButton>
                        }
                        title={ maStory.story.nom }
                        subheader="November 07, 2023"
                    ></CardHeader>

                    <StoryCarousel elements = { maStory.story.statuts }></StoryCarousel>           
    
                    <CardMedia
                        component="img"
                        height="480px"
                        image={ storyImage }
                        alt="Story"
                    ></CardMedia>
    
                    { maStory.story.displayCommentaires && <CardContent>{ maStory.story.commentaires }</CardContent> }
    
                    <CardMedia
                        component="video"
                        height="500px"
                        controls
                        src={ storyVideo }
                        alt="Story"
                    ></CardMedia>
                </Card>
            </div>
        )
    }
    else {
        return (
            <h1 style={{ textAlign: 'center', marginTop: '20%', marginLeft: '25%' }}>Cool y a rien encore</h1>
        )
    }
}

DisplayStory.propTypes = {
    maStory: PropTypes.object.isRequired
}
