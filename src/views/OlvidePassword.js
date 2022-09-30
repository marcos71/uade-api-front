import * as React from 'react';
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from "../data/users.json";

const theme = createTheme();

export default function OlvidePassword() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [repetirPass, setRepetirPass] = useState();
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar campos faltantes
        const missingEmail = !email || email === '';
        const missingPass = !pass || pass === '';
        const missingRepetirPass = !repetirPass || repetirPass === '';

        setEmailError(missingEmail);
        setPassError(missingPass);

        if (missingEmail || missingPass) {
            return;
        }

        // Obtener usuario de la BD
        const user = users.find(obj => obj.email === email);

        if (!user) {
            // Lanzar error si no existe un usuario para el mail cargado
        }

        // Validar si la nueva password y repetir password son iguales


        // Validar si la nueva password es igual a la previamente guardada, lanzar error si lo son

        // Actualizarr usuario

        // Rederigir al login
        navigate('/login', { replace: true });
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
                        Olvide password
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
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
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Repetir password"
                                    type="password"
                                    error={passError}
                                    onChange={e => setRepetirPass(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Resetear password
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Ingresa
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}