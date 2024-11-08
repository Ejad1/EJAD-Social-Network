<<<<<<< HEAD
import { PropTypes } from "prop-types";
import { useState } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl, Input } from '@mui/material';
import { red } from "@mui/material/colors";


const defaultTheme = createTheme();

export function NewStory({ display, storiesArray }) {

  const [storyType, setstoryType] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [displayStoryTypeForm, setDisplayStoryTypeForm] = useState(true);

  // Variable of the file selected
  const [selectedFile, setSelectedFile] = useState(null);

  // Name of the file selected
  const [fileName, setFileName] = useState(null);

  // Boolean for the vefication of the selection of the file
  const [fileSelected, setFileSelected] = useState(false);

  // Error message
  const [error, setError] = useState("");

  // Inputs values
  const [storyContent, setStoryContent] = useState("");

  // On submission of text story
  const handleSubmitTextStory = (event) => {
    event.preventDefault();

    if (storyContent === "") {
      setError("Please enter a text for the story");
    }
    else {
      const newStory = {
        id: 228,
        nom: "EJAD",
        statuts: [
          {
            file: storyContent,
            type: "Text",
            displayCommentaires: false
          }
        ],
      };

      storiesArray((stories) => [...stories, newStory]);

      display(false);
    }
  };

  // On submission of the image story
  const handleSubmitImageStory = (event) => {
    event.preventDefault();

    if (storyContent === "") {
      setError("Please enter a text for the story");
    }
    else {
      const newStory = {
        id: 230,
        nom: "EJAD",
        statuts: [
          {
            file:  URL.createObjectURL(selectedFile),
            type: "Image",
            commentaires: storyContent === null ? "" : storyContent,
            displayCommentaires: true
          }
        ],
      };

      storiesArray((stories) => [...stories, newStory]);

      display(false);
    }
  };

  // On submission of the video story
  const handleSubmitVideoStory = (event) => {
    event.preventDefault();

    if (storyContent === "") {
      setError("Please enter a text for the story");
    }
    else {
      const newStory = {
        id: 229,
        nom: "Le grand",
        statuts: [
          {
            file:  URL.createObjectURL(selectedFile),
            type: "Video",
            commentaires: storyContent === null ? "" : storyContent,
            displayCommentaires: true
          }
        ],
      };

      storiesArray((stories) => [...stories, newStory]);

      display(false);
    }
  };

  // Function for the story comment to a video or an image
  const handleStoryComment = (e) => {
    setStoryContent(e.target.value);
  }


  // Input values changing
  const handleStoryContentChange = (e) => {
    setStoryContent(e.target.value);
  }

  // Annulation du formulaire
  const handleForget = () => {
    display(false);
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmitTypeStory = () => {
    if (selectedValue) {
      setstoryType(selectedValue);
      setDisplayStoryTypeForm(false);
    }
    else {
      setDisplayStoryTypeForm(true);
    }
  }

  // Getting the file info
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setFileSelected(true);
  }


  if (displayStoryTypeForm) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 15,
              marginBottom: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <GroupIcon></GroupIcon>
            </Avatar>
            <Typography component="h1" variant="h5">
              Story informations
            </Typography>


            <Box component="form" container noValidate sx={{ mt: 3, mb: 2 }}>
                <Typography component="h1" variant="h5">Select the type of the story</Typography>

                <FormControl component="fieldset" sx={{ mt:2, mb: 2, ml: 13 }}>
                  <RadioGroup value={selectedValue} onChange={handleChange}>
                    <FormControlLabel value="text" control={<Radio />} label="Text" />
                    <FormControlLabel value="image" control={<Radio />} label="Image" />
                    <FormControlLabel value="video" control={<Radio />} label="Video" />
                  </RadioGroup>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: -1 }}
                    onClick={ handleSubmitTypeStory }
                  >
                    Choose
                  </Button>
                </FormControl>
            </Box>  
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  else {
    if (storyType === "text") {
      return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                marginBottom: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <GroupIcon></GroupIcon>
              </Avatar>
              <Typography component="h1" variant="h5">
                Story informations
              </Typography>

              {/* Box of the content of the story */}
              <Box component="form" noValidate onSubmit={ handleSubmitTextStory } sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={10} sm={12}>
                    <TextField
                      autoComplete="given-name"
                      name="storyText"
                      required
                      fullWidth
                      id="storyText"
                      label="Contenu de la story"
                      autoFocus
                      value={ storyContent }
                      onChange={ handleStoryContentChange }
                    />
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p style={{ color: 'red', textAlign: 'center' }}>{ error }</p>
                  </Grid>
        
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Publier la story
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: red[700],
                    '&:hover': {
                      backgroundColor: red[900]
                    }, }}
                  onClick={ handleForget }
                >
                  Annuler
                </Button>
              </Box>

            </Box>
          </Container>
        </ThemeProvider>
      )
    }
    else if (storyType === "image") {  // If the use want to add image
       return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                marginBottom: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <GroupIcon></GroupIcon>
              </Avatar>
              <Typography component="h1" variant="h5">
                Story informations
              </Typography>

              {/* Box of the content of the story */}
              <Box component="form" noValidate onSubmit={ handleSubmitImageStory } sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={10} sm={12}>
                   <Input
                      accept="image/*"
                      type="file"
                      onChange={ handleFileChange }
                      style={{ display: 'none' }}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" style={{ margin: '25%' }}>
                      <Button variant="contained" component="span">
                        Choisir une image
                      </Button>
                    </label>

                    <TextField
                      autoComplete="given-name"
                      name="storyComments"
                      fullWidth
                      id="storyComments"
                      label="Commentaires (optionnels)"
                      autoFocus
                      value={ storyContent }
                      onChange={ handleStoryComment }
                      style={{ marginTop: '20px' }}
                    />
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p style={{ color: 'red', textAlign: 'center' }}>{ error }</p>
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p className = { `${fileSelected ? 'fileSelected' : ''}` }
                       style={{ textAlign: 'center' }}
                    > 
                      { fileName }
                    </p>
                  </Grid>
        
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Publier la story
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: red[700],
                    '&:hover': {
                      backgroundColor: red[900]
                    }, }}
                  onClick={ handleForget }
                >
                  Annuler
                </Button>
              </Box>

            </Box>
          </Container>
        </ThemeProvider>
      )
    }
    else if (storyType === "video") { // If the user want to add video
       return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                marginBottom: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <GroupIcon></GroupIcon>
              </Avatar>
              <Typography component="h1" variant="h5">
                Story informations
              </Typography>

              {/* Box of the content of the story */}
              <Box component="form" noValidate onSubmit={ handleSubmitVideoStory } sx={{ mt: 3 }}>
                <Grid container spacing={2}>

                  <Grid item xs={10} sm={12}>

                    <Input
                      type="file"
                      accept="video/*"
                      onChange={ handleFileChange }
                      style={{ display: 'none' }}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" style={{ margin: '25%' }}>
                      <Button variant="contained" component="span">
                        Choisir une video
                      </Button>
                    </label>

                    <TextField
                      autoComplete="given-name"
                      name="storyComments"
                      fullWidth
                      id="storyComments"
                      label="Commentaires (optionnels)"
                      autoFocus
                      value={ storyContent }
                      onChange={ handleStoryComment }
                      style={{ marginTop: '20px' }}
                    />
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p style={{ color: 'red', textAlign: 'center' }}>{ error }</p>
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p className = { `${fileSelected ? 'fileSelected' : ''}` }
                       style={{ textAlign: 'center' }}
                    > 
                      { fileName }
                    </p>
                  </Grid>
        
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Publier la story
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: red[700],
                    '&:hover': {
                      backgroundColor: red[900]
                    }, }}
                  onClick={ handleForget }
                >
                  Annuler
                </Button>
              </Box>

            </Box>
          </Container>
        </ThemeProvider>
      )
    }
  }
}

NewStory.propTypes = {
    display: PropTypes.func.isRequired,
    discussions: PropTypes.array.isRequired,
    addDiscussion: PropTypes.func.isRequired,
    storiesArray: PropTypes.func.isRequired
}
=======
import { PropTypes } from "prop-types";
import { useState } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl, Input } from '@mui/material';
import { red } from "@mui/material/colors";


const defaultTheme = createTheme();

export function NewStory({ display, storiesArray }) {

  const [storyType, setstoryType] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [displayStoryTypeForm, setDisplayStoryTypeForm] = useState(true);

  // Variable of the file selected
  const [selectedFile, setSelectedFile] = useState(null);

  // Name of the file selected
  const [fileName, setFileName] = useState(null);

  // Boolean for the vefication of the selection of the file
  const [fileSelected, setFileSelected] = useState(false);

  // Error message
  const [error, setError] = useState("");

  // Inputs values
  const [storyContent, setStoryContent] = useState("");

  // On submission of text story
  const handleSubmitTextStory = (event) => {
    event.preventDefault();

    if (storyContent === "") {
      setError("Please enter a text for the story");
    }
    else {
      const newStory = {
        id: 228,
        nom: "EJAD",
        statuts: [
          {
            file: storyContent,
            type: "Text",
            displayCommentaires: false
          }
        ],
      };

      storiesArray((stories) => [...stories, newStory]);

      display(false);
    }
  };

  // On submission of the image story
  const handleSubmitImageStory = (event) => {
    event.preventDefault();

    if (storyContent === "") {
      setError("Please enter a text for the story");
    }
    else {
      const newStory = {
        id: 230,
        nom: "EJAD",
        statuts: [
          {
            file:  URL.createObjectURL(selectedFile),
            type: "Image",
            commentaires: storyContent === null ? "" : storyContent,
            displayCommentaires: true
          }
        ],
      };

      storiesArray((stories) => [...stories, newStory]);

      display(false);
    }
  };

  // On submission of the video story
  const handleSubmitVideoStory = (event) => {
    event.preventDefault();

    if (storyContent === "") {
      setError("Please enter a text for the story");
    }
    else {
      const newStory = {
        id: 229,
        nom: "Le grand",
        statuts: [
          {
            file:  URL.createObjectURL(selectedFile),
            type: "Video",
            commentaires: storyContent === null ? "" : storyContent,
            displayCommentaires: true
          }
        ],
      };

      storiesArray((stories) => [...stories, newStory]);

      display(false);
    }
  };

  // Function for the story comment to a video or an image
  const handleStoryComment = (e) => {
    setStoryContent(e.target.value);
  }


  // Input values changing
  const handleStoryContentChange = (e) => {
    setStoryContent(e.target.value);
  }

  // Annulation du formulaire
  const handleForget = () => {
    display(false);
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmitTypeStory = () => {
    if (selectedValue) {
      setstoryType(selectedValue);
      setDisplayStoryTypeForm(false);
    }
    else {
      setDisplayStoryTypeForm(true);
    }
  }

  // Getting the file info
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setFileSelected(true);
  }


  if (displayStoryTypeForm) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 15,
              marginBottom: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <GroupIcon></GroupIcon>
            </Avatar>
            <Typography component="h1" variant="h5">
              Story informations
            </Typography>


            <Box component="form" container noValidate sx={{ mt: 3, mb: 2 }}>
                <Typography component="h1" variant="h5">Select the type of the story</Typography>

                <FormControl component="fieldset" sx={{ mt:2, mb: 2, ml: 13 }}>
                  <RadioGroup value={selectedValue} onChange={handleChange}>
                    <FormControlLabel value="text" control={<Radio />} label="Text" />
                    <FormControlLabel value="image" control={<Radio />} label="Image" />
                    <FormControlLabel value="video" control={<Radio />} label="Video" />
                  </RadioGroup>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: -1 }}
                    onClick={ handleSubmitTypeStory }
                  >
                    Choose
                  </Button>
                </FormControl>
            </Box>  
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  else {
    if (storyType === "text") {
      return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                marginBottom: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <GroupIcon></GroupIcon>
              </Avatar>
              <Typography component="h1" variant="h5">
                Story informations
              </Typography>

              {/* Box of the content of the story */}
              <Box component="form" noValidate onSubmit={ handleSubmitTextStory } sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={10} sm={12}>
                    <TextField
                      autoComplete="given-name"
                      name="storyText"
                      required
                      fullWidth
                      id="storyText"
                      label="Contenu de la story"
                      autoFocus
                      value={ storyContent }
                      onChange={ handleStoryContentChange }
                    />
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p style={{ color: 'red', textAlign: 'center' }}>{ error }</p>
                  </Grid>
        
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Publier la story
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: red[700],
                    '&:hover': {
                      backgroundColor: red[900]
                    }, }}
                  onClick={ handleForget }
                >
                  Annuler
                </Button>
              </Box>

            </Box>
          </Container>
        </ThemeProvider>
      )
    }
    else if (storyType === "image") {  // If the use want to add image
       return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                marginBottom: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <GroupIcon></GroupIcon>
              </Avatar>
              <Typography component="h1" variant="h5">
                Story informations
              </Typography>

              {/* Box of the content of the story */}
              <Box component="form" noValidate onSubmit={ handleSubmitImageStory } sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={10} sm={12}>
                   <Input
                      accept="image/*"
                      type="file"
                      onChange={ handleFileChange }
                      style={{ display: 'none' }}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" style={{ margin: '25%' }}>
                      <Button variant="contained" component="span">
                        Choisir une image
                      </Button>
                    </label>

                    <TextField
                      autoComplete="given-name"
                      name="storyComments"
                      fullWidth
                      id="storyComments"
                      label="Commentaires (optionnels)"
                      autoFocus
                      value={ storyContent }
                      onChange={ handleStoryComment }
                      style={{ marginTop: '20px' }}
                    />
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p style={{ color: 'red', textAlign: 'center' }}>{ error }</p>
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p className = { `${fileSelected ? 'fileSelected' : ''}` }
                       style={{ textAlign: 'center' }}
                    > 
                      { fileName }
                    </p>
                  </Grid>
        
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Publier la story
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: red[700],
                    '&:hover': {
                      backgroundColor: red[900]
                    }, }}
                  onClick={ handleForget }
                >
                  Annuler
                </Button>
              </Box>

            </Box>
          </Container>
        </ThemeProvider>
      )
    }
    else if (storyType === "video") { // If the user want to add video
       return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 15,
                marginBottom: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <GroupIcon></GroupIcon>
              </Avatar>
              <Typography component="h1" variant="h5">
                Story informations
              </Typography>

              {/* Box of the content of the story */}
              <Box component="form" noValidate onSubmit={ handleSubmitVideoStory } sx={{ mt: 3 }}>
                <Grid container spacing={2}>

                  <Grid item xs={10} sm={12}>

                    <Input
                      type="file"
                      accept="video/*"
                      onChange={ handleFileChange }
                      style={{ display: 'none' }}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput" style={{ margin: '25%' }}>
                      <Button variant="contained" component="span">
                        Choisir une video
                      </Button>
                    </label>

                    <TextField
                      autoComplete="given-name"
                      name="storyComments"
                      fullWidth
                      id="storyComments"
                      label="Commentaires (optionnels)"
                      autoFocus
                      value={ storyContent }
                      onChange={ handleStoryComment }
                      style={{ marginTop: '20px' }}
                    />
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p style={{ color: 'red', textAlign: 'center' }}>{ error }</p>
                  </Grid>

                  <Grid item xs={6} sm={10}>
                    <p className = { `${fileSelected ? 'fileSelected' : ''}` }
                       style={{ textAlign: 'center' }}
                    > 
                      { fileName }
                    </p>
                  </Grid>
        
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Publier la story
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: red[700],
                    '&:hover': {
                      backgroundColor: red[900]
                    }, }}
                  onClick={ handleForget }
                >
                  Annuler
                </Button>
              </Box>

            </Box>
          </Container>
        </ThemeProvider>
      )
    }
  }
}

NewStory.propTypes = {
    display: PropTypes.func.isRequired,
    discussions: PropTypes.array.isRequired,
    addDiscussion: PropTypes.func.isRequired,
    storiesArray: PropTypes.func.isRequired
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
