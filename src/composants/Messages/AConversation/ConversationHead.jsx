import { PropTypes } from "prop-types";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function ConversationHead({ conversationName }) {

  return (
    <Box sx={{ width: '900px', marginBottom: '10px' }}>
      <AppBar position="static">
        <Toolbar>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle sx={{ width: '40px', height: '40px'}}/>
              </IconButton>
            </div>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { conversationName }
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

ConversationHead.propTypes = {
    conversationName: PropTypes.string.isRequired
}
