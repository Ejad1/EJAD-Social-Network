import { PropTypes } from "prop-types";
import { useState, useRef } from 'react';

export default function AudioRecorder({ sendAudio, nomConv }) {
    const [isRecording, setIsRecording] = useState(true);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorder = useRef(null);

    // let myAudio;
    // let blob;

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
                setAudioBlob(blob);
                // ...
            }
        };

        // mediaRecorder.current.onstop = () => {
        //     blob = new Blob(chunks, { type: 'audio/wav' });
        //     setAudioBlob(blob);

        //     // myAudio = {
        //     //     nom: { nomConv },
        //     //     type: "audio",
        //     //     data: { blob }
        //     // }
        // };

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
                data: audioBlob
            };

            console.log("The audio object is :", myAudio);

            sendAudio(myAudio);
        }
    };

    return (
        <div>
        <button onClick={stopRecording} disabled={!isRecording}>
            Arrêter enregistrement
        </button>
        {audioBlob && (
            <audio controls>
                <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
            </audio>
        )}
        </div>
    );
}

AudioRecorder.propTypes = {
    sendAudio: PropTypes.func.isRequired,
    nomConv: PropTypes.string.isRequired
}
