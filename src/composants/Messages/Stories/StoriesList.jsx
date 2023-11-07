import { PropTypes } from "prop-types";
import AStory from "./AStory";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { List, ListItem } from "@mui/material";

export default function StoriesList({ storiesArray }) {
  return (
    <div style={{ width: '30%' }}>
        <List className="discussions-list">
            { storiesArray.map((story, index) => (
                <ListItem key={ index }>
                    <DonutLargeIcon sx={{ marginRight: '10px'}}></DonutLargeIcon>
                    <AStory story={ story }></AStory>
                </ListItem>
            ))}
        </List>
    </div>
  )
}

StoriesList.propTypes = {
    storiesArray: PropTypes.array.isRequired
}
