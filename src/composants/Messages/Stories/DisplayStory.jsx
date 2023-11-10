import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, TextField } from "@mui/material";
import { InsertEmoticon, Send } from '@mui/icons-material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DisplayStory() {
  return (
    <div>
        <Card sx={{ position: 'fixed', left: '30%', right: '1%' }}>
            <CardHeader
                avatar= { <Avatar>EJAD</Avatar> }
                action= {
                    <IconButton aria-label="delete">
                        <DeleteIcon sx={{ color: 'red' }}></DeleteIcon>
                    </IconButton>
                }
                title="EJAD"
                subheader="November 07, 2023"
            ></CardHeader>

            <CardContent>Contenu de la story</CardContent>

            <CardMedia
                component="img"
                height="auto"
                // image={ pubImageSource }
                alt="Publication Image"
            ></CardMedia>

            <CardActions disableSpacing>
                <Box sx={{ 
                    position: 'fixed',
                    bottom: '5px',
                    paddingBottom: '5px',
                    paddingLeft: '2px',
                    paddingRight: '6px',
                    marginLeft: '-2px',
                    width: '68%'
                }}>
                    <input type="file" name="" id="file" style={{ display: 'none' }}/>

                    <IconButton>
                        <AttachFileIcon sx={{
                            width: '35px', 
                            height: '35px',
                        }}/>
                    </IconButton>

                    <IconButton>
                        <InsertEmoticon sx={{
                            width: '40px', 
                            height: '40px',
                        }}
                        ></InsertEmoticon>
                    </IconButton>

                    <TextField
                        multiline maxRows={2} 
                        className='textField'
                        placeholder="Your message"
                        sx={{ width: '80%' }}
                    ></TextField>

                    <IconButton>
                        <KeyboardVoiceIcon sx={{
                            width: '35px', 
                            height: '35px',
                        }}/>
                    </IconButton>

                    <IconButton>
                        <Send sx={{
                            width: '40px', 
                            height: '40px',
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
