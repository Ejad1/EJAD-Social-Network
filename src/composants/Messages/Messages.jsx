import { useContext, useEffect, useState } from 'react'
import '../../css/Messages/Messages.css'
import { DiscussionsList } from './Discussions/DiscussionsList';
import { Conversation } from './AConversation/Conversation';
import { MessageHead } from './MessageHead';
import { UserContext } from '../Contexts/UserDataContext';

export function Messages() {
    const [conversationCibleInfos, setConversationCibleInfos] = useState({});

    const { userData, setUserData } = useContext(UserContext);

    console.log("Le userData stocké en local est : ", localStorage.getItem(`user_${userData._id}`));

    console.log("Mon userData est : ", userData);

    useEffect( () => {
        const fetchData = async () => {
            // Getting the user informations
            try {
                const savedUserData = localStorage.getItem(`user_${userData._id}`);
                console.log("Le savedUserData : ", savedUserData);
                if (savedUserData) {
                    console.log("J'entre ici car les données sont trouvées");
                    setUserData(JSON.parse(savedUserData));
                } else {
                    const response = await axios.get(`http://localhost:3000/api/user/${userData._id}`);
                    const data = response.data;
                    console.log("Le data que je récupère : ", data);
                    console.log("Sinon, je récupère les données depuis la base de données");
                    setUserData(data);
                    localStorage.setItem(`user_${userData._id}`, JSON.stringify(data));
                    console.log("Je fais le set et le storage est : ", localStorage.getItem(`user_${userData._id}`));
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
            }
        }
        fetchData();
    }, [userData]);

    console.log("Le userData stpcké en local est : ", localStorage.getItem(`user_${userData._id}`));

    // Callback funcion to display a conversation
    const handleCallback = (informations) => {
        setConversationCibleInfos(informations)
    }

    const [discussionsList, setDiscussionsList] = useState([
        {
            id: 1,
            discussionName: "EJAD",
            message: ["How are you ?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam veritatis quas minus assumenda quae ut atque odio, autem soluta consequatur nihil beatae facere blanditiis voluptatem animi similique iste vel."],
            crew : false
        },
        {
            id: 2,
            discussionName: "Elle",
            message: ["How are you ?", "I was very happy to spend this time with you"],
            crew : false
        },
        {
            id: 3,
            discussionName: "Moi",
            message: ["Nice to meet you"],
            crew : false
        },
        {
            id: 4,
            discussionName: "You",
            message: ["Okay very good"],
            crew : false
        },
        {
            id: 5,
            discussionName: "Ice boy",
            message: ["Je suis trop frais : j'suis un vrai homme"],
            crew : false
        },
        {
            id: 6,
            discussionName: "Ewan",
            message: ["Allez à l'eglise est mieux que d'écouter Gazo"],
            crew : false            
        },
        {
            id: 7,
            discussionName: "Romu Romu",
            message: ["Ka boboba...", "Le vieux c'est comment ?", "Sinon c'est ma femme hein", "Tchaitsaaaa...."],
            crew : false
        },
        {
            id: 8,
            discussionName: "Léléndouch",
            message: ["Je vais te mordre"],
            crew : false
        },
        {
            id: 9,
            discussionName: "Claudianounet",
            message: ["Ohhh c'est trop mignon"],
            crew : false
        },
        {
            id: 10,
            discussionName: "Flo",
            message: ["J'ai une nouvelle moto"],
            crew : false
        },
        {
            id: 11,
            discussionName: "Fan Choco",
            message: ["Merci beaucoup c'est très gentil de ta part"],
            crew : false
        },
        {
            id: 12,
            discussionName: "Matthi",
            message: ["Barça est le meilleur club"],
            crew : false
        },
        {
            id: 13,
            discussionName: "Victoria",
            message: ["J'ai regardé un film d'horreur hier soir et c'était trop cool.", "Tu veux connaitre le nom du film ???"],
            crew : false
        },
        {
            id: 14,
            discussionName: "Promo 1 Crunch Time",
            crew : true,
            members : ["Ewan", "Mec bien", "Romu Romu", "Ice Boy", "Léléndouch", "Claudianounet"],
            message: {
                "Ewan": "Hello à vous.", 
                "Mec bien": "POF le vendredi ça vous dit ?",
                "Romu Romu": "On doit se mettre sérieusement au travail",
                "Ice Boy": "J'ai changé maintenant", 
                "Léléndouch": "...",
                "Claudianounet": "Chouchoutez moi"
            },
        }
    ])

    const handleSetDiscussionsList = (newList) => {
        setDiscussionsList(newList);
    }

    const handleAddDiscussion = (discussionAdded) => {
        setDiscussionsList([discussionAdded, ...discussionsList]);
    }


    return (
        <div className="messages">
            <MessageHead 
                discussionsList={ discussionsList }
                setDiscussions = { handleSetDiscussionsList }
                addDiscussion = { handleAddDiscussion }
            ></MessageHead>
            <div className="discussions-conversations">
                <DiscussionsList 
                    discussionsList = { discussionsList }
                    callback={ handleCallback }
                ></DiscussionsList>
                <Conversation 
                    conversationCible={ conversationCibleInfos }
                ></Conversation>
            </div>
        </div>
    )
}
