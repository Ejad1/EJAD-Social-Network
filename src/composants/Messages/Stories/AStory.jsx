import { ListItem } from "@mui/material";
import { PropTypes } from "prop-types";

export default function AStory({ story }) {
  return (
    <ListItem>{ story }</ListItem>
  )
}

AStory.propTypes = {
  story: PropTypes.object.isRequired
}
