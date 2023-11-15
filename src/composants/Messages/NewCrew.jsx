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


const defaultTheme = createTheme();

export function NewCrew({ discussions }) {

  const [errorPresent, setErrorPresent] = useState(true);
  const [nameErrorPresent, setNameErrorPresent] = useState(false);
  const [lastNameErrorPresent, setLastNameErrorPresent] = useState(false);

  // Errors messages
  const [generalError, setGeneralError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  // Inputs ref
  const firstname = useRef(null);
  const lastname = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // @ --- Empty form area verifications --- @ //
    firstname.current.value === null
    ? (setNameError("Please enter your last name"), setNameErrorPresent(true) ) 
    : (setNameError(""), setNameErrorPresent(false) );

    lastname.current.value === null
    ? (setLastNameError("Please enter your first name"), setLastNameErrorPresent(true) ) 
    : (setLastNameError(""), setLastNameErrorPresent(false) );
    // @ --- End of empty form area verifications --- @ //

    if (nameErrorPresent || lastNameErrorPresent) {
        setErrorPresent(true)
    }
    else {
      setErrorPresent(false);
    }

    console.log(errorPresent);

    if (errorPresent) {
      setGeneralError("Veuillez remplir tous les champs du formulaire");
    }
    else {
        const data = new FormData(event.currentTarget);

        let userName = data.get('firstName');
        userName = userName.toUpperCase();

        const myUser = {
          nom: userName,
          lastName: data.get('lastName'),
          number: data.get('number'),
          email: data.get('email'),
          password: data.get('password'),
        }

        console.log(myUser);

        setGeneralError("");
    }
  };  

  const [members, setMembers] = useState('');
  const [membersList, setMembersList] = useState([]);
  let membersSelect = null;

  const handleChange = (event) => {
    setMembers(event.target.value);
    setMembersList((prevList) => [...prevList, members]);

    useEffect[() => {
      membersList.map((element) => {
        membersSelect = membersSelect + " " + element;
        return membersSelect;
      })
    }, members]

    console.log("La liste qui doit s'afficher est : " + membersList);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
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
                  inputRef={ firstname }
                  autoComplete="given-name"
                  name="crewName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nom du groupe"
                  autoFocus
                />
                <p style={{ color: 'red' }}>{ nameError }</p>
              </Grid>
              <Grid item xs={10} sm={12}>
                <TextField
                inputRef={ lastname }
                  fullWidth
                  id="lastName"
                  label="Description (optionnel)"
                  name="lastName"
                  autoComplete="family-name"
                />
                <p style={{ color: 'red' }}>{ lastNameError }</p>
              </Grid>

    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Typography>Membres</Typography>
        <InputLabel id="demo-simple-select-standard-label">Membres</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={ membersList }
          label="Members list"
        >
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-filled-label">Add +</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={members}
          onChange={handleChange}
        >
          <MenuItem value={ null }>None</MenuItem>
          { discussions.map((membre, index) => (
            <MenuItem key={ index } value={ membre.discussionName }>{ membre.discussionName }</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>


              <Grid item xs={1} sm={1}></Grid>

              <Grid item xs={6} sm={10}>
                <p style={{ color: 'red', textAlign: 'center' }}>{ generalError }</p>
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

NewCrew.propTypes = {
    display: PropTypes.func.isRequired,
    discussions: PropTypes.array.isRequired,
    // addPub: PropTypes.func,
    // longueur: PropTypes.number
}
