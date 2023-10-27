import { Box, IconButton, TextField } from '@mui/material'
import { InsertEmoticon, Send } from '@mui/icons-material'

export function ConversationFoot() {
    return (
        <Box sx={{ position: 'fixed', bottom: '0'}}>   
            {/* <img src= { emojis } alt="" id='emoticone' onClick={ handleEmojisClick } /> */}
            <IconButton>
                <InsertEmoticon sx={{
                    border: '1px solid white',
                    borderRadius: '10px',
                    width: '40px', 
                    height: '40px',
                    padding: '5px'
                }}
                ></InsertEmoticon>
            </IconButton>
            <TextField placeholder="Your message" multiline maxRows={4} sx={{ borderRadius: '10px', color: 'red'}}></TextField>
            <IconButton>
                <Send sx={{
                    borderRadius: '10px',
                    width: '40px', 
                    height: '40px',
                    padding: '5px'
                }}></Send>
            </IconButton>
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
        </Box>
    )
}
