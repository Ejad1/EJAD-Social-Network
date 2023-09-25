import { useState } from 'react'
import { NewPublication } from './NewPublication'
import { Link } from 'react-router-dom'
import '../css/Nav.css'
import friends from '../assets/person-circle.svg'
import messages from '../assets/envelope.svg'
import publication from '../assets/card-text.svg'
import search from '../assets/search.svg'
import { Messages } from './Messages'


export function Navbar() {
    const [clickPub, setClickPub] = useState(false);
    const [messageClick, setMessageClick] = useState(false);

    const MakeAPublication = () => {
        setClickPub(!clickPub)
    }

    const handleMessageClick = () => {
        setMessageClick(true);
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

    const variable = true;

    return (
        <>
            <nav>
                <h1 id="initials-mobile">ESN</h1>
                <h1>
                    <a href="../../index.html">
                        <span id='initials'>EJAD S</span>ocial <span id='initials'>N</span>etwork
                    </a>
                </h1>
                <div className='links'>
                    <div className="pub-div">
                        <img src={ publication } alt="" />
                        <Link to={ "/publi" }>
                            <h3 onClick={() => MakeAPublication()} id='make-pub'>Faire une publication</h3>
                        </Link>
                    </div>
                    <div className="friends-div">
                        <img src={ friends } alt=""/> 
                        <h3 id='friends'>Amis</h3>
                    </div>
                    <div className="messages-div" onClick={ handleMessageClick }>
                        <img src={ messages } alt="" /> 
                        <h3 id='messages'>Messages</h3>
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
                <NewPublication afficher = { variable }/>
            </nav>

            {/* { clickPub && <NewPublication afficher = { variable } />} */}

            { messageClick && <Messages></Messages> }
        </>
    )
}
