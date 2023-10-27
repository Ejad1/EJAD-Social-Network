import { Avatar } from "@mui/material";
import { PropTypes } from "prop-types";
import emojis from '../../assets/face-smile-beam-regular.svg'
import envoyer from '../../assets/send.svg'

export function Conversation({ conversationCible }) {

    if (conversationCible.display) {
        return (
            <div className="conversation">
                 <div className="messages-received">
                    <div id="en-tete">
                        {/* <img src={ profile } alt="Photo de profil" /> */}
                        <Avatar src="/broken-image.jpg" sx={{ 
                            width: 44,
                            height: 44
                        }}></Avatar>
                        <h2>{ conversationCible.nomDiscussion }</h2>
                    </div>
                    <p>
                        { conversationCible.messageDiscussion }
                    </p>
                </div>
    
                {/* {
                    userAnswers.map((anAnswer, index) => (
                        <UserAnswer key={ index } answer={ anAnswer }></UserAnswer>
                    ))
                } */}
    
                <div className="answer">     
                    {/* <img src= { emojis } alt="" id='emoticone' onClick={ handleEmojisClick } /> */}
                    <img src= { emojis } alt="" id='emoticone' />
                    <textarea 
                        name="answer-text" 
                        id="answer-text" 
                        placeholder='@Votre réponse' 
                        cols="20" rows="2"
                        // value= { message }
                        // onChange={ (e) => handleAnswerChange(e.target.value) }
                    >
                    </textarea>
                    {/* <img src={ envoyer } alt="" id='send' onClick={ handleSendClick } /> */}
                    <img src={ envoyer } alt="" id='send' />
                </div>
    
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
