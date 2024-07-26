import { PropTypes } from "prop-types";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
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

                    <StoryCarousel elements = { maStory.story.statuts } begin = { 0 }></StoryCarousel>
                </Card>
            </div>
        )
    }
    else {
        return (
            <h1 style={{ textAlign: 'center', marginTop: '20%', marginLeft: '25%' }}>Click on one story to display it</h1>
        )
    }
}

DisplayStory.propTypes = {
    maStory: PropTypes.object.isRequired
}
