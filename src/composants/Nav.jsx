import { PropTypes } from "prop-types";
import { useState } from 'react'
import { NewPublication } from './Publications/NewPublication'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Nav.css'
import messages from '../assets/envelope.svg'
import publication from '../assets/card-text.svg'
import notification from '../assets/bell.svg'
import search from '../assets/search.svg'


export function Navbar({ handleAddNotifications, handleDisplayNotification, state, addPub, longueur, userName }) {
    const navigate = useNavigate();
    const [clickPub, setClickPub] = useState(false);

    const MakeAPublication = (state) => {
        setClickPub(state);
    }

    // let [affichageNavMobile, setAffichageNavMobile] = useState(0);

    const displayMobileNav = () => {
        return (
            <nav className="mobile-nav">
                <div className='links-mobile'>
                    <div className="pub-div">
                        {/* <img src={ publication } alt="" />  */}
                        <Link to={ "/publi" }>
                            <h3 id='make-pub'>Faire une publication</h3>
                        </Link>
                    </div>
                    <div className="friends-div">
                        {/* <img src={ friends } alt=""/>  */}
                        <h3 id='friends'>Amis</h3>
                    </div>
                    <div className="messages-div">
                        {/* <img src={ messages } alt="" />  */}
                        <h3 id='messages'>Messages</h3>
                    </div>
                    {/* <div className='search-div'>
                        <input type="search" name="search" id="search" placeholder='@Votre recherche' />
                        <img src={ search } alt="" />
                    </div> */}
                </div>
            </nav>
        )
    }

    const handleNotificationsClick = () => {
        handleDisplayNotification(!state);
    }

    const handleMessageClick = () => {
        navigate("/messages", { state: { userInfos: {userName} } })
    }

    return (
        <>
            <nav>
                <h1 id="initials-mobile">ESN</h1>
                <h1>
                    <a href="../../index.html">
                        <span id='initials'>{ userName.nom + " " + userName.lastName }</span>
                    </a>
                </h1>
                <div className='links'>
                    <div className="pub-div" onClick={() => MakeAPublication(true)}>
                        <img src={ publication } alt="" />
                        <h3 id='make-pub'>Faire une publication</h3>
                    </div>
                    <div className="messages-div">
                        <img src={ messages } alt="Message icon" />
                        <h3 onClick={ handleMessageClick }>Messages</h3>
                        {/* <Link  to={{
                            pathname: '/messages',
                            state: { userInfos: {userName} }
                            }}
                        >
                            Messages
                        </Link> */}
                    </div>
                    <div className="notifs-div" onClick={ handleNotificationsClick }>
                        <img src={ notification } alt=""/> 
                        <h3 id='notifs'>Notifications</h3>
                    </div>
                    <div className='search-div'>
                        <input type="search" name="search" id="search" placeholder='@Votre recherche' />
                        <img src={ search } alt="" />
                    </div>
                </div>
                <div className="lines" onClick={ displayMobileNav }>
                    <div id='one'></div>
                    <div id='two'></div>
                    <div id='three'></div>
                </div>
                { clickPub && <NewPublication afficher = { MakeAPublication } addPub = { addPub } longueur = { longueur }/> }
            </nav>
        </>
    )
}

Navbar.propTypes = {
    handleAddNotifications: PropTypes.func.isRequired,
    handleDisplayNotification: PropTypes.func.isRequired,
    state: PropTypes.bool.isRequired,
    addPub: PropTypes.func.isRequired,
    longueur: PropTypes.number.isRequired,
    userName: PropTypes.object
}
