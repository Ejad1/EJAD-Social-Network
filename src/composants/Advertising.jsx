import { useEffect, useRef, useState } from 'react'
import '../css/Advertising.css'
import soundOn from '../assets/volume-up-fill.svg'
import soundOff from '../assets/volume-mute-fill.svg'
import advertisingSong from '../assets/advertising-song.mp3'

export function Advertising() {
    const [displayAdvertise, setDisplayAdvertise] = useState(false);
    const [timeToDisplayAdvertise, setTimeToDisplayAdvertise] = useState(0);
    const [volumeUp, setVolumeUp] = useState(true);
    let soundState;
    const [waitTheEnd, setWaitTheEnd] = useState(true);
    const [count, setCount] = useState(15);
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    const handleSoundClick = () => {
        setVolumeUp(!volumeUp);
        setIsMuted(!isMuted);
        audioRef.current.muted = !isMuted
    }

    volumeUp ? soundState = soundOn : soundState = soundOff;

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayAdvertise) {
                if (count > 0) {
                    setCount((prevCount) => prevCount - 1);
                }
                else {
                    clearInterval(interval);
                    setWaitTheEnd(false);
                } 
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [displayAdvertise, count]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeToDisplayAdvertise < 120) {
                setTimeToDisplayAdvertise((prevCount) => prevCount + 1);
            }
            else {
                clearInterval(interval);
                setDisplayAdvertise(true);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeToDisplayAdvertise]);

    const handleCloseAdvertise = () => {
        setTimeToDisplayAdvertise(0);
        setDisplayAdvertise(false);
        setCount(15);
        setWaitTheEnd(true);
    }

    if (displayAdvertise) {
        return (
            <div className="advertising">
                <figure>
                    <audio autoPlay ref={ audioRef }>
                        <source src={ advertisingSong } type='audio/mpeg'></source>
                    </audio>
                </figure>
                <div className="head">  
                    <img src={ soundState } alt="Son activé" onClick={ handleSoundClick } />
                    { waitTheEnd ? <h1>{ count }</h1> : <h2 onClick={ handleCloseAdvertise }>X</h2> }                
                </div>

                <div className="main">
                    <h2 id='title'>EJAD Advertising</h2>
                    <div className="adver-body">
                        <div className="product">
                            <h2>Nom du produit</h2>
                            <div className="demarcation-line"></div>
                            <div className="product-description">
                                <h3>- Première : ce produit est très bon pour la santé. Il vous permet de garder la forme</h3>
                                <h3>- Seconde : utiliser le matin midi et soir afin de voir toute son efficacité</h3>
                                <h3 id='last'>- Troisième : je ne sais plus quoi écrire ici donc débrouillez-vous pour apprécier le produit</h3>
                            </div>
                        </div>

                        <h2 id="super-advertise">Ma super publicité pour vous faire perdre du temps 😎😎😎</h2>

                        <h2 id='testimonials-title'>Testimonials</h2>
                        <div className="testimonials">
                            <div className="testimony">
                                <h2>DOGBO Florantin</h2>
                                <p>Excellent produit. Je recommande vivement</p>
                            </div>

                            <div className="testimony">
                                <h2>SABI OLOGOU</h2>
                                <p>Très bon produit. Je suis allé au Canada grâce à lui</p>
                            </div>

                            <div className="testimony">
                                <h2>ATTIGLAH Hanielson</h2>
                                <p>Si je parle je vais pleurer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
