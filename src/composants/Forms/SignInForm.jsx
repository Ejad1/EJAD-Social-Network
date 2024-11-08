import axios from 'axios';
import { auth, provider } from "../GoogleAuthFirebase";
import { signInWithPopup } from "firebase/auth";
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
import GoogleIcon from '@mui/icons-material/Google';
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
  const [error, setError] = useState({ email: '', password: '', general: '' });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleGoogleButtonClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userName', user.displayName);

      // Sending the user infos to the data base
        const response = await axios.post("http://localhost:3000/api/googleauth", { user });
  
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
          navigate(`/esn/${response.data.userId}`);
        } else {
          setError(response.data.message);
        }
    } catch (error) {
      console.log('Google Sign-In Error:', error);
      setError({ ...error, general: 'Google Sign-In failed. Please try again.' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    let isValid = true;

    if (emailValue === '') {
      setError((prev) => ({ ...prev, email: 'Please enter your email' }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, email: '' }));
    }

    if (passwordValue === '') {
      setError((prev) => ({ ...prev, password: 'Please enter your password' }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, password: '' }));
    }

    if (!isValid) return;

    const userInfos = { email: emailValue, password: passwordValue };

    try {
      const response = await axios.post("http://localhost:3000/api/login", { userInfos });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        navigate(`/esn/${response.data.userId}`);
      } else {
        setError((prev) => ({ ...prev, general: 'Identifiants incorrects' }));
      }
    } catch (error) {
      setError((prev) => ({ ...prev, general: "Une erreur s'est produite lors de la connexion" }));
      console.log("L'erreur est :", error);
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
                  inputRef={emailRef}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!error.email}
                  helperText={error.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={passwordRef}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={!!error.password}
                  helperText={error.password}
                />
              </Grid>
            </Grid>
            {error.general && <Typography color="error">{error.general}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={handleGoogleButtonClick}
              startIcon={ <GoogleIcon/> }
            >
              Google
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body1">
                  Nouveau sur la plateforme ? Inscrivez-vous
                </Link>
              </Grid>
            </Grid>

            {/* Section for forgetting password */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/passwordforgot" variant="body1">
                  Mot de passe oubliez ?
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

import axios from 'axios';
import { auth, provider } from "../GoogleAuthFirebase";
import { signInWithPopup } from "firebase/auth";
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
import GoogleIcon from '@mui/icons-material/Google';
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
  const [error, setError] = useState({ email: '', password: '', general: '' });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleGoogleButtonClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userName', user.displayName);

      // Sending the user infos to the data base
        const response = await axios.post("http://localhost:3000/api/googleauth", { user });
  
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
          navigate(`/esn/${response.data.userId}`);
        } else {
          setError(response.data.message);
        }
    } catch (error) {
      console.log('Google Sign-In Error:', error);
      setError({ ...error, general: 'Google Sign-In failed. Please try again.' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    let isValid = true;

    if (emailValue === '') {
      setError((prev) => ({ ...prev, email: 'Please enter your email' }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, email: '' }));
    }

    if (passwordValue === '') {
      setError((prev) => ({ ...prev, password: 'Please enter your password' }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, password: '' }));
    }

    if (!isValid) return;

    const userInfos = { email: emailValue, password: passwordValue };

    try {
      const response = await axios.post("http://localhost:3000/api/login", { userInfos });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        navigate(`/esn/${response.data.userId}`);
      } else {
        setError((prev) => ({ ...prev, general: 'Identifiants incorrects' }));
      }
    } catch (error) {
      setError((prev) => ({ ...prev, general: "Une erreur s'est produite lors de la connexion" }));
      console.log("L'erreur est :", error);
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
                  inputRef={emailRef}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!error.email}
                  helperText={error.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={passwordRef}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={!!error.password}
                  helperText={error.password}
                />
              </Grid>
            </Grid>
            {error.general && <Typography color="error">{error.general}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={handleGoogleButtonClick}
              startIcon={ <GoogleIcon/> }
            >
              Google
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body1">
                  Nouveau sur la plateforme ? Inscrivez-vous
                </Link>
              </Grid>
            </Grid>

            {/* Section for forgetting password */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/passwordforgot" variant="body1">
                  Mot de passe oubliez ?
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
