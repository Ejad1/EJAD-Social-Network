import { PropTypes } from "prop-types";
import '../css/UserAnswer.css'
import { useState } from "react";
import { useEffect } from "react";

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
    const [messages, setMessages] = useState(["Salut"]);
    let newEjad;

    if (messages[-1] != answer) {
        newEjad = answer;
    }

    useEffect(() => {
        if (answer != "") {
            setMessages([...messages, newEjad]);
        }
    }, [messages, answer, newEjad]);


    const newAnswer = { id: useranswers.length, text: answer};
    if (!useranswers.includes(newAnswer)) {
        useranswers.push(newAnswer);
    }

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

                <ul>
                    { messages.map((unMessage, index) => (
                        <li key={ index }> { unMessage }</li>
                    ))}
                </ul>

                <div className="user-answer">
                    <p>
                        { newEjad }
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
