import { PropTypes } from "prop-types";
import AStory from "./AStory";

export default function Stories({ storiesList }) {
    const storiesArray = storiesList;

  return (
    <div>
        { storiesArray.map((story, index) => (
            <AStory key={ index } story={ story }></AStory>
        ))}
    </div>
  )
}

Stories.propTypes = {
    storiesList: PropTypes.array.isRequired
}
