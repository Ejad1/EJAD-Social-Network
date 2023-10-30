import { PropTypes } from "prop-types";
import { UserAnswer } from "./UserAnswer/UserAnswer";
import { useEffect, useState } from "react";

export function ConversationMain({ answersArray, conversationName }) {
    const [userAnswers, setUserAnswer] = useState(answersArray);

    useEffect(() => {
        // Filtrer les réponses pour n'inclure que celles avec le bon nom
        const filteredAnswers = answersArray.filter(item => item.nom === conversationName);
        setUserAnswer(filteredAnswers);
    }, [answersArray, conversationName]);

    return (
        <div>
        {
            userAnswers.map((anAnswer, index) => (
                <UserAnswer key={ index } answer={ anAnswer.message }></UserAnswer>
            ))
        }
        </div>
    )
}

ConversationMain.propTypes = {
    answersArray: PropTypes.array.isRequired,
    conversationName: PropTypes.string.isRequired
}
