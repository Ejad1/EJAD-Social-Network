import Typography from '@mui/material/Typography';

export function Footer() {
    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © ESN '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    <Copyright></Copyright>
}