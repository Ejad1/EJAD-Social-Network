import { PropTypes } from "prop-types";
import { useRef, useState } from 'react';
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
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { useEffect } from "react";
import { red } from "@mui/material/colors";


const defaultTheme = createTheme();

export function NewStory({ display, discussions, addDiscussion }) {

  const [storyType, setstoryType] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [displayStoryTypeForm, setDisplayStoryTypeForm] = useState(true);

  const [members, setMembers] = useState("");
  const [membersList, setMembersList] = useState([]);

  // Error message
  const [error, setError] = useState("");

  // Inputs ref
  const crewName = useRef(null);
  const CrewDescription = useRef(null);

  // Inputs values
  const [nameOfTheCrew, setNameOfTheCrew] = useState("");
  const [descriptionOfTheCrew, setDescriptionOfTheCrew] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // @ --- Empty form area verifications --- @ //
    data.get('crewName') === ""
    ? (setError("Please enter the crew name") ) 
    : (setError(""));
    // @ --- End of empty form area verifications --- @ /

    if (data.get('crewName') !== "" && membersList.length > 0) {

      setMembersList((prevList) => prevList.filter((member) => member !== ""));

      const myDiscussion = {
        id: discussions.length,
        discussionName: data.get('crewName'),
        message: [],
        description : data.get('description'),
        crew : true,
        members : membersList
      }

      addDiscussion(myDiscussion);

      setMembersList([]);
      setMembers("");
      setNameOfTheCrew("");
      setDescriptionOfTheCrew("");
      display(false);
    }
  };

//   const handleChange = (event) => {
//     if (!membersList.includes(event.target.value)) {
//       setMembers(event.target.value);
//     }
//   };

  useEffect(() => {
    setMembersList((prevList) => [...prevList, members]);
    setMembersList((prevList) => prevList.filter((member) => member !== ""));
  }, [members]);

  // Inputs values changing
  const handleNameChange = (e) => {
    setNameOfTheCrew(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescriptionOfTheCrew(e.target.value);
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
    if (storyType === "Text") {

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




              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={12}>
          <TextField
            inputRef={ crewName }
            autoComplete="given-name"
            name="storyText"
            required
            fullWidth
            id="storyText"
            label="Contenu de la story"
            autoFocus
            value={ nameOfTheCrew }
            onChange={ handleNameChange }
          />
        </Grid>
        <Grid item xs={10} sm={12}>
          <TextField
          inputRef={ CrewDescription }
            fullWidth
            id="CrewDescription"
            label="Commentaires (optionnel)"
            name="CrewDescription"
            autoComplete="Crew Description"
            value = { descriptionOfTheCrew }
            onChange={ handleDescriptionChange }
          />
        </Grid>

        {/* <div style={{ marginLeft: "10px" }}>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="demo-simple-select-filled-label">Add members +</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={members}
              onChange={handleChange}
            >
              { discussions.filter(membre => membre.crew === false).map((membre, index) => (
                <MenuItem key={ index } value={ membre.discussionName }>{ membre.discussionName }</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div> */}


        <Grid item xs={1} sm={1}></Grid>

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
  }
}

NewStory.propTypes = {
    display: PropTypes.func.isRequired,
    discussions: PropTypes.array.isRequired,
    addDiscussion: PropTypes.func.isRequired,
}
