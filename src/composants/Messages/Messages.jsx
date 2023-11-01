import { useState } from 'react'
import '../../css/Messages/Messages.css'
import { DiscussionsList } from './Discussions/DiscussionsList';
import { Conversation } from './AConversation/Conversation';
import { MessageHead } from './MessageHead';
import { useLocation } from 'react-router-dom';

export function Messages() {
    const location = useLocation();
    const userInfos = location.state.userInfos;

    const [conversationCibleInfos, setConversationCibleInfos] = useState({});

    // Callback funcion to display a conversation
    const handleCallback = (informations) => {
        setConversationCibleInfos(informations)
    }

    const [discussionsList, setDiscussionsList] = useState([
        {
            id: 1,
            discussionName: "EJAD",
            message: ["How are you ?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam veritatis quas minus assumenda quae ut atque odio, autem soluta consequatur nihil beatae facere blanditiis voluptatem animi similique iste vel."]
            
        },
        {
            id: 2,
            discussionName: "Elle",
            message: ["How are you ?", "I was very happy to spend this time with you"]
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
        {
            id: 5,
            discussionName: "Ice boy",
            message: ["Je suis trop frais : j'suis un vrai homme"]
        },
        {
            id: 6,
            discussionName: "Ewan",
            message: ["Allez à l'eglise est mieux que d'écouter Gazo"]
        },
        {
            id: 7,
            discussionName: "Romu Romu",
            message: ["Ka boboba...", "Le vieux c'est comment ?", "Sinon c'est ma femme hein", "Tchaitsaaaa...."]
        },
        {
            id: 8,
            discussionName: "Léléndouch",
            message: ["Je vais te mordre"]
        },
        {
            id: 9,
            discussionName: "Claudianounet",
            message: ["Ohhh c'est trop mignon"]
        },
        {
            id: 10,
            discussionName: "Flo",
            message: ["J'ai une nouvelle moto"]
        },
        {
            id: 11,
            discussionName: "Fan Choco",
            message: ["Merci beaucoup c'est très gentil de ta part"]
        },
        {
            id: 12,
            discussionName: "Matthi",
            message: ["Barça est le meilleur club"]
        },
        {
            id: 13,
            discussionName: "Victoria",
            message: ["J'ai regardé un film d'horreur hier soir et c'était trop cool.", "Tu veux connaitre le nom du film ???"]
        },
    ])

    const handleSetDiscussionsList = (newList) => {
        setDiscussionsList(newList);
    }

    console.log(userInfos);


    return (
        <div className="messages">
            <MessageHead 
                discussionsList={ discussionsList }
                setDiscussions = { handleSetDiscussionsList }
                userInfos = { userInfos }
            ></MessageHead>
            <div className="discussions-conversations">
                <DiscussionsList discussionsList = { discussionsList } callback={ handleCallback }></DiscussionsList>
                <Conversation conversationCible={ conversationCibleInfos }></Conversation>
            </div>
        </div>
    )
    }
