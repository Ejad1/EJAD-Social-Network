import { PropTypes } from "prop-types";
import { UserAnswer } from "./UserAnswer/UserAnswer";

export function ConversationMain({ answersArray }) {
    const userAnswers = answersArray;

    return (
        <div>
        {
            userAnswers.map((anAnswer, index) => (
                <UserAnswer key={ index } answer={ anAnswer }></UserAnswer>
            ))
        }
        </div>
    )
}

ConversationMain.propTypes = {
    answersArray: PropTypes.array.isRequired
}
