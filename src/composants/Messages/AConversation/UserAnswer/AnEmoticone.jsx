import { PropTypes } from "prop-types";

export function AnEmoticone({ nomEmoticone, nomFonction }) {
    const handleClick = () => {
        nomFonction((prevMessage) => {
            return prevMessage + nomEmoticone;
        })
    }

    return (
        <span onClick={ handleClick }>
            { nomEmoticone }
        </span>
    )
}

AnEmoticone.propTypes = {
    nomEmoticone: PropTypes.string.isRequired,
    nomFonction: PropTypes.func.isRequired
}
