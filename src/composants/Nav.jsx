import axios from 'axios'

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
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Navbar({ handleDisplayNotification, state, addPub, longueur, discussionsList, setDiscussions, user }) {
    const navigate = useNavigate();
    const searchBarRef = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [clickPub, setClickPub] = useState(false);

    // discussionsList and setDiscussions are used to do research on the platform
    const discussions = discussionsList;
    
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
        navigate("/esn");
    }

    const MakeAPublication = (state) => {
        setClickPub(state);
    }

    const handleMessageClick = () => {
        navigate("/messages")
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
                    { user ? user.firstName + " " + user.lastName : "Your name is..." }
                </Typography>
    
                <AddCommentIcon sx={{ marginRight: '10px'}} onClick={ () => MakeAPublication(true) }></AddCommentIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                    onClick={ () => MakeAPublication(true) }
                >
                    Faire une publication
                </Typography>
    
                <EmailIcon sx={{ marginRight: '10px'}} onClick={ handleMessageClick }></EmailIcon>
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
    handleDisplayNotification: PropTypes.func.isRequired,
    state: PropTypes.bool.isRequired,
    addPub: PropTypes.func.isRequired,
    longueur: PropTypes.number.isRequired,
    discussionsList: PropTypes.array,
    setDiscussions: PropTypes.func,
}
