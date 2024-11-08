import { PropTypes } from "prop-types";
import { NewPublication } from '../Publications/NewPublication'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Navbar({ user }) {
    const navigate = useNavigate();
    const searchBarRef = useRef(null);
    const [searchText, setSearchText] = useState('');
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
        setSearchText(e.target.value);
        searchBarRef.current.focus();
    }

    const handleProfilClick = () => {
        navigate(`/esn/profil/${user._id}`);
    }

    const handleHomeClick = () => {
        navigate(`/esn/${user._id}`);
    }

    const MakeAPublication = (state) => {
        setClickPub(state);
    }

    const handleMessageClick = () => {
        navigate("/esn/messages")
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
                    onClick={ handleProfilClick }
                >
                    { /* eslint-disable-next-line react/prop-types */ }
                    { user ? user.firstName + " " + user.lastName : "Your name is..." }
                </Typography>

                <HomeIcon sx={{ marginRight: ".5%", marginTop: "-.4%"}} onClick={ handleHomeClick }></HomeIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                    onClick={ handleHomeClick }
                >
                    Home
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

            { clickPub 
                && 
              <NewPublication 
                afficher = { MakeAPublication }
                author = { user.lastName + " " + user.firstName }
                authorMail = { user.email }
              />
            }
        </>
    )
}

Navbar.propTypes = {
    handleDisplayNotification: PropTypes.func.isRequired,
    state: PropTypes.bool.isRequired,
    discussionsList: PropTypes.array,
    setDiscussions: PropTypes.func,
    user: PropTypes.object.isRequired,
}
