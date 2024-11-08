<<<<<<< HEAD
// import { PropTypes } from "prop-types";
import StoriesHead from "./StoriesHead";
import StoriesList from "./StoriesList";
import DisplayStory from "./DisplayStory";
import storyVideo from '../../../assets/Dan Romer - Ending Theme [THE GOOD DOCTOR SOUNDTRACK].mp4'
import storyImage from '../../../assets/story.jpg'
import { useState } from "react";

export default function Stories() {
  const [storyCible, setStoryCible] = useState({});

  const [storiesArray, setStoriesArray] = useState([
    {
      id: 1,
      nom: "EJAD",
      statuts: [
        {
          file: "Dieu est l'Eternel de grâce",
          type: "Text",
          displayCommentaires: false
        }
      ],
    }, 
    {
      id: 2,
      nom: "Lui",
      statuts: [
        {
          file: storyVideo,
          type: "Video",
          commentaires: "C'est bon on sait",
          displayCommentaires: true
        },
        {
          file: storyImage,
          type: "Image",
          displayCommentaires: false
        }
      ],
    },
    { 
      id: 3,
      nom: "Fan choco",
      statuts: [
        {
          file: "Encore un autre",
          type: "Text",
          displayCommentaires: false
        }
      ]
    },
    { 
      id: 4,
      nom: "Elle",
      statuts: [
        {
          file: "Encore un autre",
          type: "Text",
          displayCommentaires: false
        },
        {
          file: storyImage,
          type: "Image",
          commentaires: "Quelle jolie image",
          displayCommentaires: true
        }
      ]
    },
    {
      id: 5,
      nom: "Ewan",
      statuts: [
        {
          file: "Cool",
          type: "Text",
          displayCommentaires: false
        }
      ]
    },
  ]);

  const handleStorySelect = (storyInfos) => {
    setStoryCible(storyInfos);
  }

  return (
    <>
      <StoriesHead storiesArray = { setStoriesArray }></StoriesHead>
      <div style={{ display: "flex", marginTop: '1%' }} className="storiesBox">
        <StoriesList
          storiesArray = { storiesArray }
          storySelect = { handleStorySelect }
        ></StoriesList>

        {/* <div style={{ border: '2px solid #2196F3', height: '650px', position: "fixed", marginLeft: '29.5%' }}></div> */}

        <DisplayStory maStory = { storyCible }></DisplayStory>
      </div>
    </>
  )
}

// Stories.propTypes = {
//     storiesList: PropTypes.array.isRequired
// }
=======
// import { PropTypes } from "prop-types";
import StoriesHead from "./StoriesHead";
import StoriesList from "./StoriesList";
import DisplayStory from "./DisplayStory";
import storyVideo from '../../../assets/Dan Romer - Ending Theme [THE GOOD DOCTOR SOUNDTRACK].mp4'
import storyImage from '../../../assets/story.jpg'
import { useState } from "react";

export default function Stories() {
  const [storyCible, setStoryCible] = useState({});

  const [storiesArray, setStoriesArray] = useState([
    {
      id: 1,
      nom: "EJAD",
      statuts: [
        {
          file: "Dieu est l'Eternel de grâce",
          type: "Text",
          displayCommentaires: false
        }
      ],
    }, 
    {
      id: 2,
      nom: "Lui",
      statuts: [
        {
          file: storyVideo,
          type: "Video",
          commentaires: "C'est bon on sait",
          displayCommentaires: true
        },
        {
          file: storyImage,
          type: "Image",
          displayCommentaires: false
        }
      ],
    },
    { 
      id: 3,
      nom: "Fan choco",
      statuts: [
        {
          file: "Encore un autre",
          type: "Text",
          displayCommentaires: false
        }
      ]
    },
    { 
      id: 4,
      nom: "Elle",
      statuts: [
        {
          file: "Encore un autre",
          type: "Text",
          displayCommentaires: false
        },
        {
          file: storyImage,
          type: "Image",
          commentaires: "Quelle jolie image",
          displayCommentaires: true
        }
      ]
    },
    {
      id: 5,
      nom: "Ewan",
      statuts: [
        {
          file: "Cool",
          type: "Text",
          displayCommentaires: false
        }
      ]
    },
  ]);

  const handleStorySelect = (storyInfos) => {
    setStoryCible(storyInfos);
  }

  return (
    <>
      <StoriesHead storiesArray = { setStoriesArray }></StoriesHead>
      <div style={{ display: "flex", marginTop: '1%' }} className="storiesBox">
        <StoriesList
          storiesArray = { storiesArray }
          storySelect = { handleStorySelect }
        ></StoriesList>

        {/* <div style={{ border: '2px solid #2196F3', height: '650px', position: "fixed", marginLeft: '29.5%' }}></div> */}

        <DisplayStory maStory = { storyCible }></DisplayStory>
      </div>
    </>
  )
}

// Stories.propTypes = {
//     storiesList: PropTypes.array.isRequired
// }
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
