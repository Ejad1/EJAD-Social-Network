import { PropTypes } from "prop-types";
import '../../../../css/Messages/UserAnswer.css'

export function UserAnswer({ answer, answerTime }) {

    console.log("My answer is : " + answer);

    if (answer.type === "string") {
        return (
            <div className="user-answer">
                <p>
                    { answer.message }
                </p>
                <h5 id="answer-date">{ answerTime }</h5>
            </div>    
        )
    }
    else if (answer.type === "audio") {
        console.log("My answer in the audio block is : " + answer);

        if (answer.data instanceof Blob) {
            console.log("Blob data is valid");
        } else {
            console.error("Invalid Blob data");
        }

        return (
            <div className="user-answer">
                <p>The audio will be here</p>
                <p>Between me and </p>
                <audio controls>
                    <source src={ answer.data }></source>
                    {/* { answer.data } */}
                </audio>
                <p>Me</p>
                <h5 id="answer-date">{ answerTime }</h5>
            </div>
        )
    }
    else {
        return (
            <>
                <audio controls>
                    <source src={ URL.createObjectURL(answer.data) } type="audio/wav" />
                </audio>
            </>
        )
    }
}

UserAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
    answerTime: PropTypes.string
}
