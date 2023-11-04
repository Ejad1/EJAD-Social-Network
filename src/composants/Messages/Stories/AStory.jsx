import { PropTypes } from "prop-types";

export default function AStory({ story }) {
  return (
    <div style={{ display: "inline-block" }}>{ story }</div>
  )
}

AStory.propTypes = {
    story: PropTypes.object.isRequired
}
