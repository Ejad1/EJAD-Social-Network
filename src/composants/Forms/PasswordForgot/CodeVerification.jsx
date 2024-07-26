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

export function CodeVerification() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState('success');
  const navigate = useNavigate()

  const codeRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const code = codeRef.current.value;
    const email = emailRef.current.value;

    let isValid = true;

    if (code === '' || email === '') {
      setColor('error');
      setMessage('Please all informations');
      isValid = false;
    } else {
      setMessage('');
    }

    if (!isValid) return;


    try {
      const response = await axios.post("http://localhost:3000/api/codeverification", { code, email });

      if (response.data.success) {
        navigate('/resetpassword');
      }
      else {
        setMessage("Erreur lors de la vérification du code");
        console.log(response.data.message);
      }
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
            Veuillez saisir le code que vous avez reçu
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={24}>
                <TextField
                  inputRef={codeRef}
                  required
                  fullWidth
                  id="code"
                  label="Code de vérification"
                  name="code"
                  autoComplete="code"
                />
              </Grid>

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
            </Grid>
            {message && <Typography color={ color }>{ message }</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Vérifier le code
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
