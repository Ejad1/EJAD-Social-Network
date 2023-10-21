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
  // const [userInfos, setUserInfos] = useState({});
  // const handleAddUser = (infos) => {
  //   setUserInfos(infos);
  // }

  // Variable for navigation after submitting the sign up form
  const navigate = useNavigate();

  const [errorPresent, setErrorPresent] = useState(true);
  const [nameErrorPresent, setNameErrorPresent] = useState(false);
  const [lastNameErrorPresent, setLastNameErrorPresent] = useState(false);
  const [numberErrorPresent, setNumberErrorPresent] = useState(false);
  const [emailErrorPresent, setEmailErrorPresent] = useState(false);
  const [emailConfErrorPresent, setEmailConfErrorPresent] = useState(false);
  const [passwordErrorPresent, setPasswordErrorPresent] = useState(false);
  const [passwordConfErrorPresent, setPasswordConfErrorPresent] = useState(false);

  // Errors messages
  const [generalError, setGeneralError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailConfError, setEmailConfError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfError, setPasswordConfError] = useState("");
  
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  // Inputs ref
  const firstname = useRef(null);
  const lastname = useRef(null);
  const number = useRef(null);
  const email = useRef(null);
  const emailConf = useRef(null);
  const password = useRef(null);
  const passwordConf = useRef(null);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // @ --- Empty form area verifications --- @ //
    firstname.current.value === null
    ? (setNameError("Please enter your last name"), setNameErrorPresent(true) ) 
    : (setNameError(""), setNameErrorPresent(false) );

    lastname.current.value === null
    ? (setLastNameError("Please enter your first name"), setLastNameErrorPresent(true) ) 
    : (setLastNameError(""), setLastNameErrorPresent(false) );

    number.current.value === null
    ? (setNumberError("Please enter your contact"), setNumberErrorPresent(true) ) 
    : (setNumberError(""), setNumberErrorPresent(false) );

    email.current.value === null
    ? (setEmailError("Please enter your mail"), setEmailErrorPresent(true) ) 
    : (setEmailError(""), setEmailErrorPresent(false) );

    emailConf.current.value === null 
    ? (setEmailConfError("Please confirm your mail address"), setEmailConfErrorPresent(true) ) 
    : (setEmailConfError(""), setEmailConfErrorPresent(false) );

    password.current.value === null
    ? (setPasswordError("Please enter your password"), setPasswordErrorPresent(true) ) 
    : (setPasswordError(""), setPasswordErrorPresent(false) );

    passwordConf.current.value === null 
    ? (setPasswordConfError("Please confirm your password"), setPasswordConfErrorPresent(true) ) 
    : (setPasswordConfError(""), setPasswordConfErrorPresent(false) );

    gender === null ? setGenderError("Enter your gender") : setGenderError("")
    // @ --- End of empty form area verifications --- @ //

    if (nameErrorPresent || lastNameErrorPresent || numberErrorPresent || emailErrorPresent || emailConfErrorPresent || 
      passwordErrorPresent || passwordConfErrorPresent) {
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
      if (email.current.value === emailConf.current.value) {
        if (password.current.value === passwordConf.current.value) {
          const data = new FormData(event.currentTarget);

          const myUser = {
            nom: data.get('firstName'),
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
          setGeneralError("Les deux mots de passe que vous avez entrez ne sont pas conformes");
        }
      }
      else {
        setGeneralError("Les deux emails que vous avez entrez ne sont pas conformes");
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
                  inputRef={ firstname }
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
                inputRef={ lastname }
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
                inputRef={ number }
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
                  name="email"
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
                  name="password"
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
