import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme();

export default function DetalleCUrsoAlumno(props) {
    const { nombre, materia, duracion, costo, frecuencia, desc, profesor } = props.curso;

    //throw error if no course found

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
                            <Typography gutterBottom>{frecuencia} veces por semana</Typography>
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
        </ThemeProvider>
    );
}