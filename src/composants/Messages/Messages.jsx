import { useState } from 'react'
import '../../css/Messages/Messages.css'
import { DiscussionsList } from './DiscussionsList';
import { Conversation } from './AConversation/Conversation';
import { MessageHead } from './MessageHead';

export function Messages() {
    const [conversationCibleInfos, setConversationCibleInfos] = useState({});

    // Callback funcion to display a conversation
    const handleCallback = (informations) => {
        setConversationCibleInfos(informations)
    }

    const discussionsList = [
        {
            id: 1,
            discussionName: "EJAD",
            message: ["How are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam veritatis quas minus assumenda quae ut atque odio, autem soluta consequatur nihil beatae facere blanditiis voluptatem animi similique iste vel."]
            
        },
        {
            id: 2,
            discussionName: "Elle",
            message: ["How are you ?"]
        },
        {
            id: 3,
            discussionName: "Moi",
            message: ["Nice to meet you"]
        },
        {
            id: 4,
            discussionName: "You",
            message: ["Okay very good"]
        },
    ]


    return (
        <div className="messages">
            <MessageHead></MessageHead>
            <div className="discussions-conversations">
                <DiscussionsList discussionsList = { discussionsList } callback={ handleCallback }></DiscussionsList>
                <Conversation conversationCible={ conversationCibleInfos }></Conversation>
            </div>
        </div>
    )
    }
