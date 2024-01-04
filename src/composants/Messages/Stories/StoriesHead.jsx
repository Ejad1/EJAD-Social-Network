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
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { NewStory } from "./NewStory";


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function StoriesHead({ discussionsList, setDiscussions,  userInfos, storiesArray }) {
    const navigate = useNavigate();
    const searchBarRef = useRef(null);
    const [searchText, setSearchText] = useState('');
    const discussions = discussionsList;
    const [displayNewStory, setDisplayNewStory] = useState(false);
    
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

    const handleMessageClick = () => {
        navigate("/messages", { state: { userInfos: {userInfos} } })
    }

    const handleNewStoryClick = (state) => {
        setDisplayNewStory(state);
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
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                        onClick={ handleHomeClick }
                    >
                        Home
                    </Typography>

                    <GroupAddIcon sx={{ marginRight: '10px'}}></GroupAddIcon>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                        onClick={ () => handleNewStoryClick(true) }
                    >
                        New story
                    </Typography>

                    <DonutLargeIcon sx={{ marginRight: '10px'}}></DonutLargeIcon>
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

            { displayNewStory && <NewStory display={ handleNewStoryClick } storiesArray = { storiesArray }></NewStory> }
        </>
    )
}

StoriesHead.propTypes = {
    discussionsList: PropTypes.array.isRequired,
    setDiscussions: PropTypes.func.isRequired,
    userInfos: PropTypes.object.isRequired,
    storiesArray: PropTypes.func.isRequired
}

