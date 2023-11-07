// export function Navbar({ handleAddNotifications, handleDisplayNotification, state, addPub, longueur, userName }) {
//     const navigate = useNavigate();
//     const [clickPub, setClickPub] = useState(false);

//     const MakeAPublication = (state) => {
//         setClickPub(state);
//     }

//     const handleNotificationsClick = () => {
//         handleDisplayNotification(!state);
//     }

//     const handleMessageClick = () => {
//         navigate("/messages", { state: { userInfos: {userName} } })
//     }

//     return (
//         <>
//             <nav>
//                 <h1 id="initials-mobile">ESN</h1>
//                 <h1>
//                     <a href="../../index.html">
//                         <span id='initials'>{ userName.nom + " " + userName.lastName }</span>
//                     </a>
//                 </h1>
//                 <div className='links'>
//                     <div className="pub-div" onClick={() => MakeAPublication(true)}>
//                         <img src={ publication } alt="" />
//                         <h3 id='make-pub'>Faire une publication</h3>
//                     </div>
//                     <div className="messages-div">
//                         <img src={ messages } alt="Message icon" />
//                         <h3 onClick={ handleMessageClick }>Messages</h3>
//                     </div>
//                     <div className="notifs-div" onClick={ handleNotificationsClick }>
//                         <img src={ notification } alt=""/> 
//                         <h3 id='notifs'>Notifications</h3>
//                     </div>
//                     <div className='search-div'>
//                         <input type="search" name="search" id="search" placeholder='@Votre recherche' />
//                         <img src={ search } alt="" />
//                     </div>
//                 </div>
//                 <div className="lines" onClick={ displayMobileNav }>
//                     <div id='one'></div>
//                     <div id='two'></div>
//                     <div id='three'></div>
//                 </div>
//                 { clickPub && <NewPublication afficher = { MakeAPublication } addPub = { addPub } longueur = { longueur }/> }
//             </nav>
//         </>
//     )
// }


import { PropTypes } from "prop-types";
import { NewPublication } from './Publications/NewPublication'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Navbar({ handleDisplayNotification, state, addPub, longueur, userName, discussionsList, setDiscussions,  userInfos }) {
    const navigate = useNavigate();
    const searchBarRef = useRef(null);
    const [searchText, setSearchText] = useState('');
    const discussions = discussionsList;
    const [clickPub, setClickPub] = useState(false);
    
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        },
    }));
  
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
  
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
            width: '20ch',
            },
        },
        },
    }));

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchText(e.target.value);
        const results = discussions.filter(item => item.discussionName.toLowerCase().includes(searchValue.toLowerCase()));
        
        searchValue === '' ? setDiscussions(discussions) : setDiscussions(results);
        searchBarRef.current.focus();
    }

    const handleHomeClick = () => {
        navigate("/esn", { state: { myUser: {userInfos} } });
    }

    const MakeAPublication = (state) => {
        setClickPub(state);
    }

    const handleMessageClick = () => {
        navigate("/messages", { state: { userInfos: {userInfos} } })
    }

    const handleNotificationsClick = () => {
        handleDisplayNotification(!state);
    }

    return (
        <>
            <AppBar position="static" sx={{ height: "75px", paddingTop: ".3%"}}>
            <Toolbar>
    
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                    onClick={ handleHomeClick }
                >
                    { userName.nom + " " + userName.lastName }
                </Typography>
    
                <AddCommentIcon sx={{ marginRight: '10px'}}></AddCommentIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                    onClick={ () => MakeAPublication(true) }
                >
                    Faire une publication
                </Typography>
    
                <EmailIcon sx={{ marginRight: '10px'}}></EmailIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                    onClick={ handleMessageClick }
                >
                    Messages
                </Typography>
    
                <NotificationsIcon sx={{ marginRight: '10px'}}  onClick={ handleNotificationsClick }></NotificationsIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                    onClick={ handleNotificationsClick }
                >
                    Notifications
                </Typography>
    
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        ref={ searchBarRef }
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        value={ searchText }
                        onChange={ handleSearchChange }
                    />
                </Search>
            </Toolbar>
            </AppBar>

            { clickPub && <NewPublication afficher = { MakeAPublication } addPub = { addPub } longueur = { longueur }/> }
        </>
    )
}

Navbar.propTypes = {
    // handleAddNotifications: PropTypes.func.isRequired,
    handleDisplayNotification: PropTypes.func.isRequired,
    state: PropTypes.bool.isRequired,
    addPub: PropTypes.func.isRequired,
    longueur: PropTypes.number.isRequired,
    discussionsList: PropTypes.array.isRequired,
    setDiscussions: PropTypes.func.isRequired,
    userInfos: PropTypes.object.isRequired,
    userName: PropTypes.object
}
