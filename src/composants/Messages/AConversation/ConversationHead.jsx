<<<<<<< HEAD
import { PropTypes } from "prop-types";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function ConversationHead({ conversation }) {

  return (
    <Box sx={{ position: 'static', width: '900px', marginBottom: '10px' }}>
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
                <AccountCircle sx={{ width: '100%', height: '40px'}}/>
              </IconButton>
            </div>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { conversation.discussionName }
          </Typography>
          { conversation.crew && <h4>( { conversation.members.join(", ") } )</h4> }
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
    conversation: PropTypes.object.isRequired
}
=======
import { PropTypes } from "prop-types";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function ConversationHead({ conversation }) {

  return (
    <Box sx={{ position: 'static', width: '900px', marginBottom: '10px' }}>
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
                <AccountCircle sx={{ width: '100%', height: '40px'}}/>
              </IconButton>
            </div>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { conversation.discussionName }
          </Typography>
          { conversation.crew && <h4>( { conversation.members.join(", ") } )</h4> }
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
    conversation: PropTypes.object.isRequired
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
