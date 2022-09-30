import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [role, setRole] = useState('alumno');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar campos faltantes
    const missingFirstName = !firstName || firstName === '';
    const missingLastName = !lastName || lastName === '';
    const missingEmail = !email || email === '';
    const missingPass = !pass || pass === '';

    setFirstNameError(missingFirstName);
    setLastNameError(missingLastName);
    setEmailError(missingEmail);
    setPassError(missingPass);

    if (missingFirstName || missingLastName || missingEmail || missingPass) {
      return;
    }

    // Crear nuevo usuario
    const newUser = {
      firstName,
      lastName,
      email,
      pass,
      role
    };

    // Guardar nuevo usuario

    // Redirigir al login
    navigate('/login', {replace: true});
  };

  return (
    <ThemeProvider theme={theme}>
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
                  required
                  fullWidth
                  label="Nombre"
                  autoFocus
                  error={firstNameError}
                  onChange={e => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Apellido"
                  error={lastNameError}
                  onChange={e => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  error={emailError}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  error={passError}
                  onChange={e => setPass(e.target.value)}
                />
              </Grid>
              <Grid item>
                <FormLabel id="demo-row-radio-buttons-group-label">Rol</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                >
                  <FormControlLabel value="profesor" control={<Radio />} label="Profesor" />
                  <FormControlLabel value="alumno" control={<Radio />} label="Alumno" />
                </RadioGroup>
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
                <Link href="/login" variant="body2">
                  Tenes una cuenta? Ingresa
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}