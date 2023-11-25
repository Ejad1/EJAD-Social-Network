import { PropTypes } from "prop-types";
import { useState, useRef } from 'react';

export default function AudioRecorder({ sendAudio }) {
    const [isRecording, setIsRecording] = useState(true);
    const [audioBlob, setAudioBlob] = useState(null);
    const mediaRecorder = useRef(null);

    // Start recording
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
            chunks.push(event.data);
        }
        };

        mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        };

        mediaRecorder.current.start();
        setIsRecording(true);
    })
    .catch((error) => console.error('Erreur lors de la demande d\'autorisation pour l\'audio :', error));

    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    };

    if (audioBlob) {
        let myAudio =   <audio controls>
                            <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
                        </audio>

        console.log("L'audio : " + myAudio);

        let myAudioSrc = URL.createObjectURL(audioBlob);

        console.log("La source : " + myAudioSrc);

        // sendAudio(myAudio);
    }

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
    sendAudio: PropTypes.func.isRequired
}
