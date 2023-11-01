import { PropTypes } from "prop-types";
import { AnEmoticone } from './AnEmoticone'
import '../../../../css/Emoticones.css'


export function Emoticones({ changeFunction }) {
    const myImages = [
        {
            id: 0,
            image: '😀'
        },
        {
            id: 1,
            image: '😃'
        },
        {
            id: 2,
            image: '😄'
        },
        {
            id: 3,
            image: '😁'
        },
        {
            id: 4,
            image: '😆'
        },
        {
            id: 5,
            image: '😅'
        },
        {
            id: 6,
            image: '😂'
        },
        {
            id: 7,
            image: '🤣'
        },
        {
            id: 8,
            image: '😊'
        },
        {
            id: 9,
            image: '😇'
        },
        {
            id: 10,
            image: '⭐'
        },
        {
            id: 11,
            image: '😝'
        },
        {
            id: 12,
            image: '😉'
        },
        {
            id: 13,
            image: '😏'
        },
        {
            id: 14,
            image: '😎'
        },
        {
            id: 15,
            image: '🥰'
        },
        {
            id: 16,
            image: '😍'
        },
        {
            id: 17,
            image: '😘'
        },
        {
            id: 18,
            image: '❤️'
        },
        {
            id: 19,
            image: '💖'
        },
        {
            id: 20,
            image: '🧐'
        },
        {
            id: 21,
            image: '🙃'
        },
        {
            id: 22,
            image: '😑'
        },
        {
            id: 23,
            image: '😴'
        },
        {
            id: 24,
            image: '🥱'
        },
        {
            id: 25,
            image: '😪'
        },
        {
            id: 26,
            image: '🤕'
        },
        {
            id: 27,
            image: '🍩'
        },
        {
            id: 28,
            image: '😹'
        },
        {
            id: 29,
            image: '💋'
        },
        {
            id: 30,
            image: '🙂'
        },
        {
            id: 31,
            image: '😋'
        },
        {
            id: 32,
            image: '😛'
        },
        {
            id: 33,
            image: '🤑'
        },
        {
            id: 34,
            image: '😳'
        },
        {
            id: 35,
            image: '🤐'
        },
        {
            id: 36,
            image: '🤫'
        },
        {
            id: 37,
            image: '🤗'
        },
        {
            id: 38,
            image: '🤧'
        },
        {
            id: 39,
            image: '😥'
        },
        {
            id: 40,
            image: '😭'
        },
        {
            id: 41,
            image: '😨'
        }
    ]

    return (
        <div className="emoticones">
            { myImages.map(anImage => 
                <AnEmoticone 
                    key = { anImage.id }
                    idImage = { anImage.id }
                    nomEmoticone = { anImage.image }
                    nomFonction = { changeFunction }
                >
                </AnEmoticone>    
            )}
        </div>
    )
}

Emoticones.propTypes = {
    changeFunction: PropTypes.func.isRequired
}
