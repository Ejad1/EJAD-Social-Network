import { PropTypes } from "prop-types";
import AStory from "./AStory";
import { List } from "@mui/material";

export default function StoriesList({ storiesArray, storySelect }) {
  const mesStories = storiesArray;

  return (
    <div style={{ width: '30%' }}>
        <List className="discussions-list">
            { mesStories.map((story, index) => (
                <AStory 
                    key={ index }
                    story={ story }
                    storySelect = { storySelect }
                ></AStory>
            ))}
        </List>
    </div>
  )
}

StoriesList.propTypes = {
    storiesArray: PropTypes.array.isRequired,
    storySelect: PropTypes.func.isRequired
}
