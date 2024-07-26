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

export function PasswordReset() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState('success');

  const emailRef = useRef(null);
  const mdpRef = useRef(null);
  const mdpConfRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const mdpValue = mdpRef.current.value;
    const mdpConfValue = mdpConfRef.current.value;

    let isValid = true;

    let informations;

    if (emailValue === '' || mdpValue === '' || mdpConfValue === '') {
      setColor('error');
      setMessage('Veuillez remplir tous les champs');
      isValid = false;
    } else {
      setMessage('');
      informations = {
        email : emailValue,
        mdp : mdpValue,
        mdpConf : mdpConfValue
      }
    }

    if (!isValid) return;

    const connectionUrl = 'http://localhost:5173/signin';

    try {
      const response = await axios.post("http://localhost:3000/api/resetpassword", { informations });
      console.log(response);
      if (response.data.success) {
        setColor('info');
        setMessage(
          <>
            Votre mot de passe a été modifié avec succès. <br />
            Vous pouvez retourner sur la page de connexion <a href={connectionUrl}>ICI</a>
          </>
        );
      }
    } catch (error) {
      setColor('error');
      setMessage("Une erreur s'est produite");
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
            Veuillez saisir les informations demandées
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={24}>
                <TextField
                  inputRef={emailRef}
                  required
                  fullWidth
                  id="email"
                  label="Entrer votre mail"
                  name="email"
                  autoComplete="email@gmail.com"
                />
              </Grid>

              <Grid item xs={24}>
                <TextField
                  inputRef={mdpRef}
                  required
                  fullWidth
                  id="mdp"
                  type='password'
                  label="Mot de passe"
                  name="mdp"
                  autoComplete="@"
                />
              </Grid>

              <Grid item xs={24}>
                <TextField
                  inputRef={mdpConfRef}
                  required
                  fullWidth
                  id="mdpconfirmation"
                  type='password'
                  label="Confirmer votre mot de passe"
                  name="mdpconfirmation"
                  autoComplete="@"
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
              Modifier le mot de passe
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
