import { PropTypes } from "prop-types";
import { Avatar, Badge } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import '../../css/Messages/DiscussionsList.css'
// import { useState } from "react";

export function DiscussionsList({ discussionsList, callback }) {
    const discussions = discussionsList;

    const handleDiscussionClick = (nom, message) => {
        callback({
            nomDiscussion: nom,
            messageDiscussion: message,
            display: true
        })
    }

    return (
       <section className="discussions-list">
        <List sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}>
            {
                discussions.map((element, index) => (
                    <ListItem key={ index } onClick={ () => handleDiscussionClick(element.discussionName, element.message) }>
                        <ListItemAvatar>
                            <Badge badgeContent={1} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                <Avatar src="/broken-image.jpg" sx={{ 
                                    width: 44, 
                                    height: 44 
                                }}></Avatar>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={ element.discussionName } 
                            secondary={ element.message }
                            sx={{ height: '40px', overflow: 'hidden'}}
                        />
                    </ListItem>
                ))
            }
        <ListItem>
            <ListItemAvatar>
            <Avatar src="/broken-image.jpg" sx={{ 
                width: 44, 
                height: 44 
            }}></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Profile picture" secondary="How are you" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar sx={{ 
                width: 44, 
                height: 44 
            }}>
                <WorkIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Crew profile picture" secondary="He: I want the pictures" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar sx={{ 
                width: 44, 
                height: 44 
            }}>
                <BeachAccessIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        </List>
       </section>
    )
}

DiscussionsList.propTypes = {
    discussionsList: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired
}
