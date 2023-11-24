import { PropTypes } from "prop-types";
import { UserAnswer } from "./UserAnswer/UserAnswer";
import { useEffect, useRef, useState } from "react";
import { yellow } from "@mui/material/colors";

export function ConversationMain({ answersArray, conversation, messagesReceived }) {
    const [userAnswers, setUserAnswer] = useState(answersArray);
    const friendsMessages = messagesReceived;
    const scroolToBottom = useRef(null);

    useEffect(() => {
        // Filtrer les réponses pour n'inclure que celles avec le bon nom
        const filteredAnswers = answersArray.filter(item => item.nom === conversation.discussionName);
        setUserAnswer(filteredAnswers);
    }, [answersArray, conversation.discussionName]);

    const scroll = () => {
        scroolToBottom.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scroll();
    }, [userAnswers]);

    if (conversation.crew) {
        if (conversation.message.length !== 0) {
            return (
                <div className="conversationMain">
                    <div className="messages-received">
                        { Object.keys(conversation.message).map((element, index) => (
                            <div key={ index }>
                                <p style={{ border: "none", marginLeft: "-5px" }}>{ element }</p>
                                <p style={{ marginTop: "-35px" }}>{ conversation.message[element] }</p>
                            </div>
                        )) }
                    </div>
        
                    {
                        userAnswers.map((anAnswer, index) => (
                            <UserAnswer key={ index } answer={ anAnswer.message } answerTime= { anAnswer.answerTime }></UserAnswer>
                        ))
                    }

                    <div ref={ scroolToBottom }></div>
                </div> 
            )
        }
        else {
            return (
                <div className="conversationMain">
                    <div className="messages-received">
                        <h2 
                            style={{ 
                                backgroundColor: yellow[400],
                                width: 'fit-content',
                                marginLeft: '50%',
                                transform: 'translateX(-50%)' 
                            }}
                        >There is no messages for the moment</h2>
                    </div>
        
                    {
                        userAnswers.map((anAnswer, index) => (
                            <UserAnswer key={ index } answer={ anAnswer.message } answerTime= { anAnswer.answerTime }></UserAnswer>
                        ))
                    }
                </div> 
            )
        }
    }
    else {
        return (
            <div className="conversationMain">
                <div className="messages-received">
                    { friendsMessages.map((element, index) => (
                        <p key={ index }> { element } </p>
                    )) }
                </div>
    
                {
                    userAnswers.map((anAnswer, index) => (
                        <UserAnswer key={ index } answer={ anAnswer.message } answerTime= { anAnswer.answerTime }></UserAnswer>
                    ))
                }

                <div ref={ scroolToBottom }></div>
            </div>
        )
    }
}

ConversationMain.propTypes = {
    answersArray: PropTypes.array.isRequired,
    conversation: PropTypes.string.isRequired,
    messagesReceived: PropTypes.array.isRequired
}
