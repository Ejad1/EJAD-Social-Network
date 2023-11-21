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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from "react";
import { red } from "@mui/material/colors";


const defaultTheme = createTheme();

export function NewCrew({ display, discussions, addDiscussion }) {

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

  const handleChange = (event) => {
    if (!membersList.includes(event.target.value)) {
      setMembers(event.target.value);
    }
  };

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
            Crew informations
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={12}>
                <TextField
                  inputRef={ crewName }
                  autoComplete="given-name"
                  name="crewName"
                  required
                  fullWidth
                  id="crewName"
                  label="Nom du groupe"
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
                  label="Description (optionnel)"
                  name="CrewDescription"
                  autoComplete="Crew Description"
                  value = { descriptionOfTheCrew }
                  onChange={ handleDescriptionChange }
                />
              </Grid>

              <div style={{ marginLeft: "10px" }}>
                { membersList.length > 0 
                    && 
                  <Typography sx={{ margin: '15px' }}>
                    Membres : { membersList.join(', ') }
                  </Typography> }
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
              </div>


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
              Créer le groupe
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
  );
}

NewCrew.propTypes = {
    display: PropTypes.func.isRequired,
    discussions: PropTypes.array.isRequired,
    addDiscussion: PropTypes.func.isRequired,
    // addPub: PropTypes.func,
    // longueur: PropTypes.number
}
