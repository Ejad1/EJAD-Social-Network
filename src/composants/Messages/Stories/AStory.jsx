import { PropTypes } from "prop-types";

export default function AStory({ story }) {
  return (
    <div>{ story }</div>
  )
}

AStory.propTypes = {
    story: PropTypes.object.isRequired
}
