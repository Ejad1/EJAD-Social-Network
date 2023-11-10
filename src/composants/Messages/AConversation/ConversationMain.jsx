import { PropTypes } from "prop-types";
import { UserAnswer } from "./UserAnswer/UserAnswer";
import { useEffect, useState } from "react";
import AudioRecorder from "./AudioRecord";

export function ConversationMain({ answersArray, conversationName, messagesReceived }) {
    const [userAnswers, setUserAnswer] = useState(answersArray);
    const friendsMessages = messagesReceived;

    useEffect(() => {
        // Filtrer les réponses pour n'inclure que celles avec le bon nom
        const filteredAnswers = answersArray.filter(item => item.nom === conversationName);
        setUserAnswer(filteredAnswers);
    }, [answersArray, conversationName]);

    return (
        <div className="conversationMain">
            <div className="messages-received">
                { friendsMessages.map((element, index) => (
                    <p key={ index }> { element } </p>
                )) }
            </div>

            <AudioRecorder></AudioRecorder>

            {
                userAnswers.map((anAnswer, index) => (
                    <UserAnswer key={ index } answer={ anAnswer.message } answerTime= { anAnswer.answerTime }></UserAnswer>
                ))
            }
        </div>
    )
}

ConversationMain.propTypes = {
    answersArray: PropTypes.array.isRequired,
    conversationName: PropTypes.string.isRequired,
    messagesReceived: PropTypes.array.isRequired
}
