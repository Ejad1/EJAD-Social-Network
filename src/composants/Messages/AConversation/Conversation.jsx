import { PropTypes } from "prop-types";
import ConversationHead from "./ConversationHead";
import { ConversationFoot } from "./ConversationFoot";
import { ConversationMain } from "./ConversationMain";
import { useState } from "react";

export function Conversation({ conversationCible }) {
    // User answers array
    const [answers, setAnswers] = useState([]);

    const handleSetAnswers = (newAnswers) => {
        setAnswers([...answers, newAnswers])
    }

    if (conversationCible.display) {
        const messagesReceived = conversationCible.messageDiscussion;

        return (
            <div className="conversation">
                <ConversationHead conversationName = { conversationCible.nomDiscussion }></ConversationHead>        
        
                <ConversationMain 
                    answersArray = { answers }
                    conversationName = { conversationCible.nomDiscussion }
                    messagesReceived = { messagesReceived }
                ></ConversationMain>
    
               <ConversationFoot 
                    setAnswers = { handleSetAnswers }
                    conversationName = { conversationCible.nomDiscussion }
                ></ConversationFoot>
            </div>
        )
    }
    else {
        return ( 
            <div className="conversationNull">
                <h1>Select a discussion to send or read a message</h1>
            </div>
        )
    }
}

Conversation.propTypes = {
    conversationCible: PropTypes.object.isRequired
}
