import { PropTypes } from "prop-types";
import { Box, IconButton, TextField } from '@mui/material'
import { InsertEmoticon, Send } from '@mui/icons-material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useRef, useState } from 'react'
import { Emoticones } from './UserAnswer/Emoticones';
import AudioRecorder from "./AudioRecord";

export function ConversationFoot({ setAnswers, conversationName }) {
    const attachedFiles = useRef(null);
    const [displayEmoticons, setDisplayEmoticons] = useState(false);
    const [recordAudio, setRecordAudio] = useState(false);
    const [message, setMessage] = useState("");

    const handleDisplayEmoticons = () => {
        setDisplayEmoticons(!displayEmoticons);
    }

    const handleAnswerChange = (e) => {
        setMessage(e);
    }

    const handleSendAnser = () => {
        const currentDate = new Date();

        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        hours < 10 ? hours = "0" + hours : hours;
        minutes < 10 ? minutes = "0" + minutes : minutes;

        const myTime = hours + ": " + minutes;

        if (message !== "") {
            const userAnswer = {
                nom: conversationName,
                message: message,
                answerTime: myTime
            }
            setAnswers(userAnswer);
            setMessage("");
        }
    }

    const handleAttachedFiles = () => {
        attachedFiles.current.click();
    }

    const handleAudioClick = () => {
        setRecordAudio(!recordAudio);
    }

    return (
        <Box sx={{ 
            position: 'fixed',
            bottom: '5px',
            border: '2px solid #2196F3',
            borderTop: 'none',
            paddingBottom: '5px',
            paddingLeft: '2px',
            paddingRight: '6px',
            marginLeft: '-2px',
            width: '59.99%'
        }}
        >
            <input type="file" name="" id="file" style={{ display: 'none' }} ref={ attachedFiles } />

            <IconButton onClick={ handleAttachedFiles }>
                <AttachFileIcon sx={{
                    width: '35px', 
                    height: '35px',
                }}/>
            </IconButton>

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
                // sx={{ width: '678px' }}
                sx={{ width: '75%' }}
            ></TextField>

            <IconButton onClick={ handleAudioClick }>
                <KeyboardVoiceIcon sx={{
                    width: '35px', 
                    height: '35px',
                }}/>
            </IconButton>

            <IconButton onClick={ handleSendAnser }>
                <Send sx={{
                    width: '40px', 
                    height: '40px',
                }}></Send>
            </IconButton>

            { displayEmoticons && <Emoticones changeFunction = { handleAnswerChange }></Emoticones>}

            { recordAudio && <AudioRecorder></AudioRecorder> }
        </Box>
    )
}

ConversationFoot.propTypes = {
    setAnswers: PropTypes.func.isRequired,
    conversationName: PropTypes.string.isRequired
}
