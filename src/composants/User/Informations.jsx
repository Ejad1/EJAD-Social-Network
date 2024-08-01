import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
// Importation of MUI componants
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
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Nav";
import { UserContext } from "../Contexts/UserDataContext";


  
const defaultTheme = createTheme();


export function UserInformations() {
  // Retrieving user informations
  const { userData } = useContext(UserContext);

  // To go to the authentification page
  const navigate = useNavigate();

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    navigate(`/esn/authentification/${userData._id}`);

    setIsSubmitting(true);
  };

  return (
    <>
    <Navbar></Navbar>
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
            { userData.firstName + " " + userData.lastName }
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  defaultValue={ userData.lastName }
                  id="outlined-read-only-input"
                  label= "Nom de famille"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input"
                  label= "Prénom"
                  defaultValue={ userData.firstName }
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type = 'number'
                  id = 'number'
                  label = 'number'
                  defaultValue = { userData.number }
                  autoComplete='off'
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id = 'gender'
                  label = 'gender'
                  defaultValue = { userData.gender }
                  autoComplete='off'
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="email"
                  defaultValue={ userData.email }
                  autoComplete="off"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={1} sm={1}></Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={ isSubmitting } // Désactive le bouton pendant la soumission
              >
              { isSubmitting ? 'Changement de page...' : 'Modifier mes informations' }
            </Button>

          </Box>
        </Box>
        <Footer sx={{ mt: 5 }} ></Footer>
      </Container>
    </ThemeProvider>
    </>
  );
}
