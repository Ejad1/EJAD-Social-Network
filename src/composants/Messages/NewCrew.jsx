import { PropTypes } from "prop-types";
import { useRef, useState } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const defaultTheme = createTheme();

export function NewCrew({ display }) {

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

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
                  required
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
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>


              <Grid item xs={1} sm={1}></Grid>

              <Grid item xs={6} sm={10}>
                <p style={{ color: 'red', textAlign: 'center' }}>{ generalError }</p>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive notifications of future app updates via email."
                />
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
    // addPub: PropTypes.func,
    // longueur: PropTypes.number
}
