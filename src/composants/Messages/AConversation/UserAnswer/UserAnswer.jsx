<<<<<<< HEAD
import { PropTypes } from "prop-types";
import { useState, useRef } from 'react';
import '../../../../css/Messages/UserAnswer.css'

let myAudioBlob = false;

export function UserAnswer({ answer, answerTime }) {

    console.log("My answer is : " + answer);

    if (answer.type === "string") {
        return (
            <div className="user-answer">
                <p>
                    { answer.message }
                </p>
                <h5 id="answer-date">{ answerTime }</h5>
            </div>    
        )
    }
    else if (answer.type === "audio") {

        return (
            <div className="user-answer audio-part">
                {myAudioBlob && (
                    <audio controls style={{ marginLeft: '67%' }}>
                        <source src={URL.createObjectURL(myAudioBlob)} type="audio/wav" />
                    </audio>
                )}
            </div>
        )
    }
    else {
        return (
           <h2>The message(s) type is not supported</h2>
        )
    }
}




export function AudioRecorder({ sendAudio, nomConv }) {
    const [isRecording, setIsRecording] = useState(true);
    const mediaRecorder = useRef(null);

    // Start recording
    navigator.mediaDevices.getUserMedia({ audio: true, })
    .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
            chunks.push(event.data);
        }
        };

        mediaRecorder.current.onstop = () => {
            if (mediaRecorder.current && mediaRecorder.current.mimeType) {
                const blob = new Blob(chunks, { type: mediaRecorder.current.mimeType });
                myAudioBlob = blob;
            }
        };

        mediaRecorder.current.start();
        setIsRecording(true);
    })
    .catch((error) => console.error('Erreur lors de la demande d\'autorisation pour l\'audio :', error));


    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
            mediaRecorder.current.stop();
            setIsRecording(false);

            const myAudio = {
                nom: nomConv,
                type: "audio",
                data: myAudioBlob
            };

            sendAudio(myAudio);
        }
    };

    return (
        <div>
        <button onClick={stopRecording} disabled={!isRecording}>
            Arrêter enregistrement
        </button>
        </div>
    );
}



UserAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
    answerTime: PropTypes.string
}


AudioRecorder.propTypes = {
    sendAudio: PropTypes.func.isRequired,
    nomConv: PropTypes.string.isRequired
}
=======
import { PropTypes } from "prop-types";
import { useState, useRef } from 'react';
import '../../../../css/Messages/UserAnswer.css'

let myAudioBlob = false;

export function UserAnswer({ answer, answerTime }) {

    console.log("My answer is : " + answer);

    if (answer.type === "string") {
        return (
            <div className="user-answer">
                <p>
                    { answer.message }
                </p>
                <h5 id="answer-date">{ answerTime }</h5>
            </div>    
        )
    }
    else if (answer.type === "audio") {

        return (
            <div className="user-answer audio-part">
                {myAudioBlob && (
                    <audio controls style={{ marginLeft: '67%' }}>
                        <source src={URL.createObjectURL(myAudioBlob)} type="audio/wav" />
                    </audio>
                )}
            </div>
        )
    }
    else {
        return (
           <h2>The message(s) type is not supported</h2>
        )
    }
}




export function AudioRecorder({ sendAudio, nomConv }) {
    const [isRecording, setIsRecording] = useState(true);
    const mediaRecorder = useRef(null);

    // Start recording
    navigator.mediaDevices.getUserMedia({ audio: true, })
    .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
            chunks.push(event.data);
        }
        };

        mediaRecorder.current.onstop = () => {
            if (mediaRecorder.current && mediaRecorder.current.mimeType) {
                const blob = new Blob(chunks, { type: mediaRecorder.current.mimeType });
                myAudioBlob = blob;
            }
        };

        mediaRecorder.current.start();
        setIsRecording(true);
    })
    .catch((error) => console.error('Erreur lors de la demande d\'autorisation pour l\'audio :', error));


    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
            mediaRecorder.current.stop();
            setIsRecording(false);

            const myAudio = {
                nom: nomConv,
                type: "audio",
                data: myAudioBlob
            };

            sendAudio(myAudio);
        }
    };

    return (
        <div>
        <button onClick={stopRecording} disabled={!isRecording}>
            Arrêter enregistrement
        </button>
        </div>
    );
}



UserAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
    answerTime: PropTypes.string
}


AudioRecorder.propTypes = {
    sendAudio: PropTypes.func.isRequired,
    nomConv: PropTypes.string.isRequired
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
