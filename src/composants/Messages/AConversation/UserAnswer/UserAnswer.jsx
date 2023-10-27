import { PropTypes } from "prop-types";
import '../../../../css/UserAnswer.css'

export function UserAnswer({ answer }) {
    return (
        <div className="user-answer">
            <p>
                { answer }
            </p>
        </div>    
    )
}

UserAnswer.propTypes = {
    answer: PropTypes.string.isRequired,
}
