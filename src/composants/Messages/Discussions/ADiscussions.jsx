import { PropTypes } from "prop-types";
import { useState } from "react";
import { Avatar, Badge, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export function ADiscussion({ callback, nom, message }) {
    const [discussionBadge, setDiscussionBadge] = useState(message.length);

    const handleDiscussionClick = (nom, message) => {
        setDiscussionBadge(0);
        callback({
            nomDiscussion: nom,
            messageDiscussion: message,
            display: true
        })
    }

    return (
        <ListItem onClick={ () => handleDiscussionClick(nom, message) }>
            <ListItemAvatar>
                <Badge 
                    badgeContent={ discussionBadge }
                    color="primary"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Avatar src="/broken-image.jpg" sx={{ 
                        width: 44, 
                        height: 44 
                    }}></Avatar>
                </Badge>
            </ListItemAvatar>
            <ListItemText 
                primary={ nom } 
                secondary={ message[message.length - 1] }
                sx={{ height: '40px', overflow: 'hidden'}}
            />
        </ListItem>
    )
}

ADiscussion.propTypes = {
    callback: PropTypes.func.isRequired,
    nom: PropTypes.string.isRequired,
    message: PropTypes.array.isRequired
}
