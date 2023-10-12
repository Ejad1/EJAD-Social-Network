// import { useRef, useState } from 'react';
// import '../css/Form.css'

// export function Form() {
//     // Errors messages
//     const [nameError, setNameError] = useState("");

//     // Inputs ref
//     const firstname = useRef(null);
//     const lastname = useRef(null);
//     const number = useRef(null);
//     const email = useRef(null);
//     const emailConf = useRef(null);
//     const password = useRef(null);
//     const passwordConf = useRef(null);

//     const handleSubmitForm = (e) => {
//         e.preventDefault();
//         if ( firstname.current.value === "") {
//             setNameError("Please enter your first name");
//         }
//     }


//     return (
//         <>
//             <form  onSubmit={ handleSubmitForm }>
//                 <div className="esn">
//                     <h3>E</h3>
//                     <h3>S</h3>
//                     <h3>N</h3>
//                 </div>
//                 <div className="formulaire">
//                     <h1>Inscription</h1>
//                     <div className="infos">
//                         <div className="body-infos">
//                             <div className="first-last-name">
//                                 <div className="name">
//                                     <label htmlFor="name">Nom : </label>
//                                     <input type="text" name="name" placeholder="@votre nom" ref={ firstname }/>
//                                     <p>{ nameError }</p>
//                                 </div>

//                                 <div className="last-name">
//                                     <label htmlFor="lastName">Prénom : </label>
//                                     <input type="text" name="lastName" placeholder="@votre prénom" ref={ lastname }/>
//                                     <p>ERROR</p>
//                                 </div>
//                             </div>

//                             <div className="gender-contact">
//                                 <div className="number">
//                                     <label htmlFor="number">Contact : </label>
//                                     <input type="number" name="number" placeholder="@votre numéro" ref={ number } />
//                                     <p>ERROR</p>
//                                 </div>
                                
//                                 <div className="gender">
//                                     <h3>Genre</h3>
//                                     <section className="gender-choices">
//                                         <label htmlFor="man" id='man-label'>Masculin</label>
//                                         <input type="radio" name="man" />
//                                         <label htmlFor="woman" id='woman-label'>Féminin</label>
//                                         <input type="radio" name="woman" />
//                                     </section>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="account-infos">
//                             <div className="mail-infos">
//                                 <div className="email">
//                                     <label htmlFor="mail">Email : </label>
//                                     <input type="email" name="mail" placeholder="@adresse mail" ref={ email } />
//                                     <p>ERROR</p>
//                                 </div>
                                
//                                 <div className="email-conf">
//                                     <label htmlFor="mailConf">Confirmer votre mail : </label>
//                                     <input type="email" name="mailConf" placeholder="@confimation de l'email" ref={ emailConf } />
//                                     <p>ERROR</p>
//                                 </div>
//                             </div>
                            
//                             <div className="password-infos">
//                                 <div className="password">
//                                     <label htmlFor="password">Mot de passe : </label>
//                                     <input type="password" name="password" placeholder="@password" ref={ password }/>
//                                     <p>ERROR</p>
//                                 </div>

//                                 <div className="password-conf">
//                                     <label htmlFor="passwordConf">Confirmation du mot de passe : </label>
//                                     <input type="password" name="passwordConf" placeholder="@confirmation of the password" ref={ passwordConf }/>
//                                     <p>ERROR</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <button type="submit">Sign up</button>
//                 </div>
//             </form>
//         </>
//     )
// }



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

export function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nom de famille"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Prénom(s)"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password confirmation"
                  type="password"
                  id="password-confirmation"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
                <Link href="#" variant="body2">
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
