
export function Conversation() {
    return (
        <>
             <div className="messages-received">
                <div id="en-tete">
                    {/* <img src={ profile } alt="Photo de profil" /> */}
                    <h3>Nom et Prénoms</h3>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quos ad mollitia enim, magni alias atque officiis 
                    dolores qui libero et quod dignissimos doloremque fuga. Placeat dolore numquam repellat recusandae?
                </p>
            </div>

            {/* {
                userAnswers.map((anAnswer, index) => (
                    <UserAnswer key={ index } answer={ anAnswer }></UserAnswer>
                ))
            } */}

            <div className="answer">     
                {/* <img src= { emojis } alt="" id='emoticone' onClick={ handleEmojisClick } /> */}
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
            </div>

            {/* { isClicked && <Emoticones changeFunction = { handleAnswerChange } ></Emoticones> } */}
        </>
    )
}
