<<<<<<< HEAD
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Avatar, Badge, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export function ADiscussion({ callback, nom, message, discussion }) {
    const [discussionBadge, setDiscussionBadge] = useState(message.length);
    const discussionCible = discussion;

    const handleDiscussionClick = () => {
        setDiscussionBadge(0);
        discussionCible.display = true;
        callback(discussionCible)
    }

    return (
        <>
            <ListItem onClick={ handleDiscussionClick }>
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
            <Divider variant="inset" component="li" sx={{ backgroundColor: '#2196F3', maxWidth: '400px' }} />
        </>
    )
}

ADiscussion.propTypes = {
    callback: PropTypes.func.isRequired,
    nom: PropTypes.string.isRequired,
    message: PropTypes.array.isRequired,
    discussion: PropTypes.object.isRequired
}
=======
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Avatar, Badge, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export function ADiscussion({ callback, nom, message, discussion }) {
    const [discussionBadge, setDiscussionBadge] = useState(message.length);
    const discussionCible = discussion;

    const handleDiscussionClick = () => {
        setDiscussionBadge(0);
        discussionCible.display = true;
        callback(discussionCible)
    }

    return (
        <>
            <ListItem onClick={ handleDiscussionClick }>
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
            <Divider variant="inset" component="li" sx={{ backgroundColor: '#2196F3', maxWidth: '400px' }} />
        </>
    )
}

ADiscussion.propTypes = {
    callback: PropTypes.func.isRequired,
    nom: PropTypes.string.isRequired,
    message: PropTypes.array.isRequired,
    discussion: PropTypes.object.isRequired
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
