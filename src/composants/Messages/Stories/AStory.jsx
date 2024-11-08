<<<<<<< HEAD
import { PropTypes } from "prop-types";
import { Avatar, Badge, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function AStory({ story, storySelect }) {

  const handleStoryClick = () => {
    const infos = {
      story: story,
      display: true 
    }

    storySelect(infos);
  }
  
  return (
    <div>
      <ListItem onClick={ handleStoryClick } sx={{ userSelect: 'none' }}>
        <ListItemAvatar>
            <Badge 
                badgeContent={ story.statuts.length }
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
            primary= { story.nom }
        />
      </ListItem>
    </div>
  )
}

AStory.propTypes = {
  story: PropTypes.object.isRequired,
  storySelect: PropTypes.func.isRequired
}
=======
import { PropTypes } from "prop-types";
import { Avatar, Badge, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function AStory({ story, storySelect }) {

  const handleStoryClick = () => {
    const infos = {
      story: story,
      display: true 
    }

    storySelect(infos);
  }
  
  return (
    <div>
      <ListItem onClick={ handleStoryClick } sx={{ userSelect: 'none' }}>
        <ListItemAvatar>
            <Badge 
                badgeContent={ story.statuts.length }
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
            primary= { story.nom }
        />
      </ListItem>
    </div>
  )
}

AStory.propTypes = {
  story: PropTypes.object.isRequired,
  storySelect: PropTypes.func.isRequired
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
