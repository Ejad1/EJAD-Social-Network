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

export function PasswordForgot() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState('success');

  const emailRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;

    let isValid = true;

    if (emailValue === '') {
      setColor('error');
      setMessage('Please enter your email');
      isValid = false;
    } else {
      setMessage('');
    }

    if (!isValid) return;


    try {
      const response = await axios.post("http://localhost:3000/api/passwordforgot", { emailValue });
      setColor('success');
      setMessage('Un message a été envoyé à votre mail. Veuillez le lire et suivre les instructions ');
      console.log(response);
    } catch (error) {
      setColor('error');
      setMessage("Une erreur s'est produite lors de l'envoi du code");
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
            Veuillez entrer votre adresse email
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={5}>
              <Grid item xs={24}>
                <TextField
                  inputRef={emailRef}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            {message && <Typography color={ color }>{ message }</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Envoyer le code
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Revenir à la page de connexion
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

