// import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from '@mui/material/SvgIcon';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from 'react';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NewCrew } from "./NewCrew";


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export function MessageHead({ discussionsList, setDiscussions, addDiscussion,  userInfos }) {
    const [displayNewCrewForm, setDisplayNewCrewForm] = useState(false);
    const navigate = useNavigate();
    const searchBarRef = useRef(null);
    const [searchText, setSearchText] = useState('');
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
        navigate("/esn", { state: { myUser: {userInfos} } });
    }

    const handleStoryClick = () => {
        navigate("/stories", { state: { myUser: {userInfos} } });
    }

    const handleNewCrewClick = (state) => {
        setDisplayNewCrewForm(state);
    }

    return (
        <>
            <AppBar position="static">
            <Toolbar>
    
                <HomeIcon onClick={ handleHomeClick }></HomeIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
                    onClick={ handleHomeClick }
                >
                    Home
                </Typography>
    
                <GroupAddIcon sx={{ marginRight: '8px'}}></GroupAddIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
                    onClick={ () => handleNewCrewClick(true) }
                >
                    New crew
                </Typography>
    
                <DonutLargeIcon sx={{ marginRight: '10px'}}></DonutLargeIcon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
                    onClick={ handleStoryClick }
                >
                    Stories
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

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 10 }}
                >
                    <MenuIcon />
                </IconButton>

            </Toolbar>
            </AppBar>

            { displayNewCrewForm 
                && 
              <NewCrew 
                display = { handleNewCrewClick }
                discussions = { discussions }
                addDiscussion = { addDiscussion }
              ></NewCrew>
            }
        </>
    )
}

MessageHead.propTypes = {
    discussionsList: PropTypes.array.isRequired,
    setDiscussions: PropTypes.func.isRequired,
    addDiscussion: PropTypes.func.isRequired,
    userInfos: PropTypes.object.isRequired
}
