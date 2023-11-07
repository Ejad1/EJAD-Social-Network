// import { PropTypes } from "prop-types";
import { useState } from "react";
import StoriesHead from "./StoriesHead";
import StoriesList from "./StoriesList";
import DisplayStory from "./DisplayStory";

export default function Stories() {
    const storiesArray = useState(["Cool", "Mon statut", "Encore un autre"]);

  return (
    <>
      <StoriesHead></StoriesHead>
      <div style={{ display: "flex", marginTop: '1%' }} className="storiesBox">
        <StoriesList storiesArray = { storiesArray }></StoriesList>
        <DisplayStory></DisplayStory>
      </div>
    </>
  )
}

// Stories.propTypes = {
//     storiesList: PropTypes.array.isRequired
// }
