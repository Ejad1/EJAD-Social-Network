import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, TextField } from "@mui/material";
import { InsertEmoticon, Send } from '@mui/icons-material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CloseIcon from '@mui/icons-material/Close';
import storyVideo from '../../../assets/Dan Romer - Ending Theme [THE GOOD DOCTOR SOUNDTRACK].mp4'
import storyImage from '../../../assets/story.jpg'

export default function DisplayStory() {
  return (
    <div>
        <Card sx={{ position: 'relative', left: '7%', overflowY: 'auto' }}>
            <CardHeader
                avatar= { <Avatar>EJAD</Avatar> }
                action= {
                    <IconButton aria-label="delete">
                        <CloseIcon sx={{ color: 'red' }}></CloseIcon>
                    </IconButton>
                }
                title="EJAD"
                subheader="November 07, 2023"
            ></CardHeader>            

            <CardMedia
                component="img"
                height="480px"
                image={ storyImage }
                alt="Story"
            ></CardMedia>

            <CardContent>Contenu de la story</CardContent>

            <CardMedia
                component="video"
                height="500px"
                controls
                src={ storyVideo }
                alt="Story"
            ></CardMedia>

<CardContent>Contenu de la story</CardContent>

            <CardActions disableSpacing>
                <Box sx={{ 
                    position: 'fixed',
                    bottom: '5px',
                    paddingBottom: '5px',
                    paddingLeft: '2px',
                    paddingRight: '4px',
                    marginLeft: '-1.2%',
                    width: '68%'
                }}>
                    <input type="file" name="" id="file" style={{ display: 'none' }}/>

                    <IconButton>
                        <AttachFileIcon sx={{
                            width: '30px', 
                            height: '30px',
                        }}/>
                    </IconButton>

                    <IconButton>
                        <InsertEmoticon sx={{
                            width: '35px', 
                            height: '35px',
                        }}
                        ></InsertEmoticon>
                    </IconButton>

                    <TextField
                        multiline maxRows={2} 
                        className='textField'
                        placeholder="Your message"
                        sx={{ width: '70%' }}
                    ></TextField>

                    <IconButton>
                        <KeyboardVoiceIcon sx={{
                            width: '30px', 
                            height: '30px',
                        }}/>
                    </IconButton>

                    <IconButton>
                        <Send sx={{
                            width: '35px', 
                            height: '35px',
                            marginRight: '-15px'
                        }}></Send>
                    </IconButton>

                    {/* { displayEmoticons && <Emoticones changeFunction = { handleAnswerChange }></Emoticones>} */}
                </Box>
            </CardActions>
        </Card>
    </div>
  )
}
