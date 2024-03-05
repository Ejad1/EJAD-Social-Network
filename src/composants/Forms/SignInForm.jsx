import axios from 'axios';

import { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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

export function SignInForm() {
  const navigate = useNavigate();

  const [errorPresent, setErrorPresent] = useState(false);
  const [emailErrorPresent, setEmailErrorPresent] = useState(false);
  const [passwordErrorPresent, setPasswordErrorPresent] = useState(false);

  // Errors messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  // Inputs ref
  const email = useRef(null);
  const password = useRef(null);


  const handleSubmit = async (event) => {
    event.preventDefault();

    email.current.value === "" 
    ? (setEmailErrorPresent(true), setEmailError("Please enter your email"))
    : (setEmailErrorPresent(false), setEmailError(""));

    password.current.value === "" 
    ? (setPasswordErrorPresent(true), setPasswordError("Please enter your password"))
    : (setPasswordErrorPresent(false), setPasswordError(""));

    (emailErrorPresent || passwordErrorPresent) ? setErrorPresent(true) : setErrorPresent(false);

    if (!(email.current.value === ""  || password.current.value === "" )) {
      const data = new FormData(event.currentTarget);

      let userInfos = {
        email: data.get('email'),
        password: data.get('password'),
      }

      // Try to connect to the platform
      try {
        const response = await axios.post("/signin", userInfos);

        if (response.data.success) {
          navigate('/esn')
        }
        else {
          setError("Identifiants incorrects");
        }
      }
      catch (error) {
        setError("Une erreur s'est produite lors de la connexion");
        console.log("L'erreur est : " + error);
      }

    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                inputRef={ email }
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                { emailErrorPresent && <p style={{ color: 'red' }}>{ emailError }</p> }
              </Grid>
              <Grid item xs={12}>
                <TextField
                inputRef={ password }
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                { passwordErrorPresent && <p style={{ color: 'red' }}>{ passwordError }</p> }
              </Grid>
            </Grid>
            <p style={{ color: 'red' }}>{ error }</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Nouveau sur la plateforme ? Inscrivez-vous
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
