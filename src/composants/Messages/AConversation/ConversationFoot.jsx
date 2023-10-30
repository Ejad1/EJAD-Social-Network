import { PropTypes } from "prop-types";
import { Box, IconButton, TextField } from '@mui/material'
import { InsertEmoticon, Send } from '@mui/icons-material'
import { useState } from 'react'
import { Emoticones } from './UserAnswer/Emoticones';

export function ConversationFoot({ setAnswers, conversationName }) {
    const [displayEmoticons, setDisplayEmoticons] = useState(false);
    const [message, setMessage] = useState("");

    const handleDisplayEmoticons = () => {
        setDisplayEmoticons(!displayEmoticons);
    }

    const handleAnswerChange = (e) => {
        setMessage(e);
    }

    const handleSendAnser = () => {
        if (message !== "") {
            const userAnswer = {
                nom: conversationName,
                message: message
            }
            setAnswers(userAnswer);
            setMessage("");
        }
    }

    return (
        <Box sx={{ position: 'fixed', bottom: '5px', border: '2px solid #2196F3', borderTop: 'none', paddingBottom: '5px' }}>
            <IconButton onClick={ handleDisplayEmoticons }>
                <InsertEmoticon sx={{
                    width: '40px', 
                    height: '40px',
                }}
                ></InsertEmoticon>
            </IconButton>

            <TextField
                multiline maxRows={2} 
                className='textField'
                placeholder="Your message"
                value= { message }
                onChange={ (e) => handleAnswerChange(e.target.value) }
            ></TextField>

            <IconButton onClick={ handleSendAnser }>
                <Send sx={{
                    width: '40px', 
                    height: '40px',
                }}></Send>
            </IconButton>

            { displayEmoticons && <Emoticones changeFunction = { handleAnswerChange }></Emoticones>}
        </Box>
    )
}

ConversationFoot.propTypes = {
    setAnswers: PropTypes.func.isRequired,
    conversationName: PropTypes.string.isRequired
}
