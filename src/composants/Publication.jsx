import { useState } from "react";
import { PropTypes } from "prop-types";
import profile from '../assets/person-circle.svg'

export function Publication({ content, imageSource, tableau }) {
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);

    const likeNotification = {
        title: "Like",
        content: "Vous avez liker une publication"
    }

    const handleLike = () => {
        setLike(like + 1)
        tableau((previous) => {
            return previous + likeNotification;
        }
        )
    }

    const handleShare = () => {
        setShare(share + 1)
    }

    return (
        <div className="publication">
            <div id="en-tete">
                <img src={ profile } alt="Photo de profil" /> <h3>EJAD</h3>
            </div>
            <p>
                { content }
            </p>
            { imageSource && <img src={ imageSource } alt="Image de la publication" id='image-publication'></img> }
            <div id='bas'>
                <h3 onClick={ handleLike }>{ like } 👍</h3>
                <h3>0 Commentaires</h3>
                <h3 onClick={ handleShare }>{ share } Partages</h3>
            </div>
        </div>
    )
}

Publication.propTypes = {
    content: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    tableau: PropTypes.func.isRequired
}
