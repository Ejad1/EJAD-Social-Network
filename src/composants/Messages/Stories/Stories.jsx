// import { PropTypes } from "prop-types";
import StoriesHead from "./StoriesHead";
import StoriesList from "./StoriesList";
import DisplayStory from "./DisplayStory";

export default function Stories() {
    const storiesArray = [
      {
        id: 1,
        nom: "EJAD",
        statut: ["Dieu est l'Eternel de grâce"]
      }, 
      {
        id: 2,
        nom: "Lui",
        statut: ["Mon statut", "C'est bon on sait"]
      },
      { 
        id: 3,
        nom: "Fan choco",
        statut: ["Encore un autre"]
      },
      { 
        id: 4,
        nom: "Elle",
        statut: ["Encore un autre"]
      },
      { 
        id: 5,
        nom: "Ewan",
        statut: ["Cool"]
      },
    ];

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
