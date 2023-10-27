import { PropTypes } from "prop-types";
import ConversationHead from "./ConversationHead";
import { ConversationFoot } from "./ConversationFoot";
import { ConversationMain } from "./ConversationMain";

export function Conversation({ conversationCible }) {

    if (conversationCible.display) {
        return (
            <div className="conversation">
                <ConversationHead conversationName = { conversationCible.nomDiscussion }></ConversationHead>
                <div className="messages-received">
                    <p>
                        { conversationCible.messageDiscussion }
                    </p>
                </div>
    
                <ConversationMain></ConversationMain>
    
               <ConversationFoot></ConversationFoot>
    
                {/* { isClicked && <Emoticones changeFunction = { handleAnswerChange } ></Emoticones> } */}
            </div>
        )
    }
    else {
        return ( 
            <div className="conversation">
                <h1>Select a discussion to send or read a message</h1>
            </div>
        )
    }
}

Conversation.propTypes = {
    conversationCible: PropTypes.object.isRequired
}
