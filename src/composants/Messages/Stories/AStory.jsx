import { Avatar, Badge, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { PropTypes } from "prop-types";

export default function AStory({ story }) {
  
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
            <Badge 
                badgeContent={ story.statut.length }
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
            // secondary={ message[message.length - 1] }
            primary= { story.nom } 
            secondary= { story.statut[story.statut.length - 1] }
            sx={{ height: '40px', overflow: 'hidden'}}
        />
      </ListItem>
    </div>
  )
}

AStory.propTypes = {
  story: PropTypes.object.isRequired
}
