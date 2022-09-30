import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, createTheme, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const theme = createTheme();

export default function DetalleCursoAlumno(props) {
    const [open, setOpen] = useState(false);
    const [contratar, setContratar] = useState(props.contratar);
    const { nombre, materia, duracion, costo, frecuencia, desc, profesor } = props.curso;

    // Validar si no existe una solicitud pendiente para este curso y alumno, entonces ignorar el boton de contratar

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEnviar = () => {
        // LLamar API para generar una solicitud de compra para el alumno y curso
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Curso: {nombre}
                    </Typography>
                    <Typography gutterBottom>{profesor}</Typography>
                    <Typography gutterBottom>Descripcion del profesor</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6} sx={{ mt: 2 }}>

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Materia</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{materia}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Duracion</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{duracion}Hs</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Costo</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>${costo}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Frecuencia</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{frecuencia}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Descripcion</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{desc}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {contratar &&
                <Box>
                    <Button variant='outlined' onClick={handleClickOpen}>Contratar</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Mensaje para el profesor</DialogTitle>
                        <DialogContent>
                            <Grid container spacing={3} sx={{ mt: 1 }}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Telefono"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        id="time"
                                        label="Horario"
                                        type="time"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="Mensaje"
                                        multiline
                                        maxRows={3}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleEnviar}>Enviar</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            }
        </ThemeProvider>
    );
}