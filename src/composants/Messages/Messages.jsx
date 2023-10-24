import { useEffect, useState } from 'react'
import { PropTypes } from "prop-types";
import { UserAnswer } from './UserAnswer'
import { Emoticones } from './Emoticones'
import '../../css/Messages/Messages.css'
import profile from '../../assets/person-circle.svg'
import envoyer from '../../assets/send.svg'
import emojis from '../../assets/face-smile-beam-regular.svg'
import { DiscussionsList } from './DiscussionsList';
import { Conversation } from './Conversation';

export function Messages({ display, handleAddNotifications, handleDisplayNotification }) {
    const [messagesTop, setMessagesTop] = useState(13.5);

    const [discussionsList, setDiscussionsList] = useState([
        {
            id: 1,
            discussionName: "EJAD",
            message: "How are you"
        },
        {
            id: 2,
            discussionName: "Elle",
            message: "How are you ?"
        },
        {
            id: 3,
            discussionName: "Moi",
            message: "Nice to meet you"
        },
        {
            id: 4,
            discussionName: "You",
            message: "Okay very good"
        },
    ])

    useEffect(() => {
        let lastScrollTop = document.documentElement.scrollTop;

        function handleScroll() {
            const currentScrollTop = document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                if (window.scrollY > 75) {
                    setMessagesTop(1);
                }
                else {
                    setMessagesTop(messagesTop - (window.scrollY / 30));
                }
            }
            else {
                if (window.scrollY < 4) {
                    setMessagesTop(13.5);
                }
                else {
                    setMessagesTop(messagesTop + (window.scrollY / 30));
                } 
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [messagesTop]);

    const [isClicked, setIsClicked] = useState(false);
    const [message, setMessage] = useState("");

    const messageNotification = {
        title: "Message",
        content: "Vous avez envoyer un message"
    }

    // Array for user answers
    const [userAnswers, setUserAnswers] = useState([]);

    const handleEmojisClick = () => {
        setIsClicked(!isClicked);
    }

    const handleAnswerChange = (newText) => {
        setMessage(newText)
    }

    const handleSendClick = () => {
        if (message != "") {
            setUserAnswers([...userAnswers, message]);
            setMessage("");
            handleAddNotifications(messageNotification);
            handleDisplayNotification(true);
        }
    }

    const handleCloseClick = () => {
        display(false);
    }

    return (
        <div className="messages" 
            style={{ top: `${ messagesTop }%`, overflowY: 'auto' }}
        >
            <DiscussionsList discussionsList = { discussionsList }></DiscussionsList>
            <Conversation></Conversation>
            <h2 className="close-messages" onClick={ handleCloseClick }>X</h2>
            <div className="messages-received">
                <div id="en-tete">
                    <img src={ profile } alt="Photo de profil" />
                    <h3>Nom et Prénoms</h3>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quos ad mollitia enim, magni alias atque officiis 
                    dolores qui libero et quod dignissimos doloremque fuga. Placeat dolore numquam repellat recusandae?
                </p>
            </div>

            {
                userAnswers.map((anAnswer, index) => (
                    <UserAnswer key={ index } answer={ anAnswer }></UserAnswer>
                ))
            }

            <div className="answer">     
                <img src= { emojis } alt="" id='emoticone' onClick={ handleEmojisClick } />
                <textarea 
                    name="answer-text" 
                    id="answer-text" 
                    placeholder='@Votre réponse' 
                    cols="20" rows="2"
                    value= { message }
                    onChange={ (e) => handleAnswerChange(e.target.value) }
                >
                </textarea>
                <img src={ envoyer } alt="" id='send' onClick={ handleSendClick } />
            </div>

            { isClicked && <Emoticones changeFunction = { handleAnswerChange } ></Emoticones> }
        </div>
    )
    }


Messages.propTypes = {
    display: PropTypes.func.isRequired,
    handleAddNotifications: PropTypes.func.isRequired,
    handleDisplayNotification: PropTypes.func.isRequired
}
