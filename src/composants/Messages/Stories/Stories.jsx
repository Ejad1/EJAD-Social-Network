// import { PropTypes } from "prop-types";
import { useState } from "react";
import AStory from "./AStory";
import StoriesHead from "./StoriesHead";

export default function Stories() {
    const storiesArray = useState(["Cool", "Mon statut"]);

  return (
    <>
       <StoriesHead></StoriesHead>
      <div style={{ display: "flex" }}>
          { storiesArray.map((story, index) => (
              <AStory key={ index } story={ story }></AStory>
          ))}
      </div>
    </>
  )
}

// Stories.propTypes = {
//     storiesList: PropTypes.array.isRequired
// }
