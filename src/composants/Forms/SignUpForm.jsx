import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © ESN '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export function SignUpForm() {

  // Variable for navigation after submitting the sign up form
  const navigate = useNavigate();

  const [errorPresent, setErrorPresent] = useState(true);

  // Errors messages
  const [generalError, setGeneralError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailConfError, setEmailConfError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfError, setPasswordConfError] = useState("");
  
  const [gender, setGender] = useState(null);
  const [genderError, setGenderError] = useState("");

  // Inputs ref
  const email = useRef(null);
  const emailConf = useRef(null);
  const password = useRef(null);
  const passwordConf = useRef(null);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);

    // @ --- Empty form area verifications --- @ //
    data.get("firstName") === "" ? setNameError("Please enter your last name") : setNameError("");

    data.get("lastName") === "" ? setLastNameError("Please enter your first name") : setLastNameError("");

    data.get("number") === "" ? setNumberError("Please enter your contact") : setNumberError("") ;

    data.get("email") === "" ? setEmailError("Please enter your mail") : setEmailError("") ;

    data.get("emailConf") === "" ? setEmailConfError("Please confirm your mail address") : setEmailConfError("") ;

    data.get("password") === "" ? setPasswordError("Please enter your password") : setPasswordError("") ;

    data.get("passwordConf") === "" ? setPasswordConfError("Please confirm your password") : setPasswordConfError("") ;

    gender === null ? setGenderError("Enter your gender") : setGenderError("")
    // @ --- End of empty form area verifications --- @ //

    if ( data.get("firstName") === "" || data.get("lastName") === "" || data.get("number") === "" || data.get("email") === "" || 
          data.get("emailConf") === "" || data.get("password") === "" || data.get("passwordConf") === "" ) {
        setErrorPresent(true);
    }
    else {
      setErrorPresent(false);
    }

    if (errorPresent) {
      setGeneralError("Veuillez remplir tous les champs du formulaire");
    }
    else {
      if (email.current.value === emailConf.current.value) {
        if (password.current.value === passwordConf.current.value) {

          let userName = data.get('firstName');
          userName = userName.toUpperCase();

          const myUser = {
            nom: userName,
            lastName: data.get('lastName'),
            number: data.get('number'),
            gender: gender,
            email: data.get('email'),
            password: data.get('password'),
          }

          console.log(myUser);

          navigate("/esn", { state: {myUser} });

          setGeneralError("");
        }
        else {
          setGeneralError("Les deux mots de passe que vous avez entrez ne sont pas identiques");
        }
      }
      else {
        setGeneralError("Les deux emails que vous avez entrez ne sont pas identiques");
      }
    }
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nom de famille"
                  autoFocus
                />
                <p style={{ color: 'red' }}>{ nameError }</p>
              </Grid>
              <Grid item xs={10} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Prénom(s)"
                  name="lastName"
                  autoComplete="family-name"
                />
                <p style={{ color: 'red' }}>{ lastNameError }</p>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type = 'number'
                  id = 'number'
                  label = 'Your number'
                  name = 'number'
                  autoComplete='number'
                />
                <p style={{ color: 'red' }}>{ numberError }</p>
              </Grid>

              <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={ handleGenderChange }
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl> 
              <p style={{ color: 'red' }}>{ genderError }</p>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                inputRef={ email }
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <p style={{ color: 'red' }}>{ emailError }</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={ emailConf}
                  required
                  fullWidth
                  id="emailConf"
                  label="Email Confirmation"
                  name="emailConf"
                  autoComplete="email"
                />
                <p style={{ color: 'red' }}>{ emailConfError }</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={ password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <p style={{ color: 'red' }}>{ passwordError }</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={ passwordConf }
                  required
                  fullWidth
                  name="passwordConf"
                  label="Password confirmation"
                  type="password"
                  id="password-confirmation"
                  autoComplete="password"
                />
                <p style={{ color: 'red' }}>{ passwordConfError }</p>
              </Grid>

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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
