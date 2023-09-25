import { PropTypes } from "prop-types";
import '../css/UserAnswer.css'

// Array for the user answers
const useranswers = [
    {
        id: 0,
        text: "salut"
    },
    {
        id: 1, 
        text: "coucou"
    }
]

console.log(useranswers);

function AnotherAnswer({ myAnswer }) {
    console.log("J'entre dans la fonction");
    console.log(myAnswer);
    return (
        <div className="user-answers">
                <p>
                    { myAnswer }
                </p>
        </div>
    )
}

export function UserAnswer({ answer }) {
    const newAnswer = { id: useranswers.length, text: answer};
    if (!useranswers.includes(newAnswer)) {
        useranswers.push(newAnswer);
    }

    console.log(useranswers);

    if ( answer !== "" ) {
        return (
            <>
                {
                    useranswers.map(anAnswer => {
                        <AnotherAnswer 
                            key={ anAnswer.id } 
                            myAnswer={ anAnswer.text }
                        ></AnotherAnswer>
                    })
                }

                <div className="user-answer">
                    <p>
                        { answer }
                    </p>
                </div>
            </>
        )
    }
}

UserAnswer.propTypes = {
    answer: PropTypes.string.isRequired,
}

AnotherAnswer.propTypes = {
    myAnswer: PropTypes.string.isRequired
}
