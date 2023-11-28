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
    answerTime: PropTypes.string.isRequired
}
