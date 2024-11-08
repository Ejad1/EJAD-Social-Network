import axios from 'axios';
import { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../Footer/Footer';


const defaultTheme = createTheme();

export function Authentification() {
  const userId = useParams();

  const [message, setMessage] = useState("");
  const [color, setColor] = useState('success');
  const navigate = useNavigate()

  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const infos = {
      password : passwordRef.current.value,
      email : emailRef.current.value,
    }

    let isValid = true;

    if (infos.code === '' || infos.email === '') {
      setColor('error');
      setMessage('Please all informations');
      isValid = false;
    } else {
      setMessage('');
    }

    if (!isValid) return;


    try {
      const response = await axios.post("http://localhost:3000/api/userauth", { infos } );

      if (response.data.success) {
        navigate(`/esn/user/modification/${userId}`);
      }
      else {
        setMessage("Erreur lors de l'authentification'");
        console.log(response.data.error);
      }
    } catch (error) {
      setColor('error');
      setMessage("Une erreur s'est produite lors de l'envoi du code");
      console.log("L'erreur est :", error);
    }
  };

  const identificationMessage = "S'identifier"

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
            Veuillez saisir les informations suivantes
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={24}>
                <TextField
                  inputRef={emailRef}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              
              <Grid item xs={24}>
                <TextField
                  inputRef={passwordRef}
                  required
                  fullWidth
                  type='password'
                  id="mdp"
                  label="Mot de passe"
                  name="mdp"
                  autoComplete="mdp"
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
              { identificationMessage }
            </Button>
          </Box>
        </Box>
        <Footer sx={{ mt: 5 }} ></Footer>
      </Container>
    </ThemeProvider>
  );
}
