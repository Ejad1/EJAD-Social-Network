import { PropTypes } from "prop-types";
import '../../../../css/Messages/UserAnswer.css'

export function UserAnswer({ answer, answerTime }) {

    return (
        <div className="user-answer">
            <p>
                { answer }
            </p>
            <h5 id="answer-date">{ answerTime }</h5>
        </div>    
    )
}

UserAnswer.propTypes = {
    answer: PropTypes.string.isRequired,
    answerTime: PropTypes.string.isRequired
}
