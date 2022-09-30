import { Box, Container, createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";
import CardAlumnoCurso from "../components/CardCursoAlumno";
import dataCursos from "../data/cursos.json"

const theme = createTheme();

export default function SolicitudesAlumno() {
    const logedUser = localStorage.getItem('logedUser');
    const parsedUser = JSON.parse(logedUser);

    // Llamar a la API y obtener solo los cursos solicitados del alumno logeado
    const cursosPendientes = dataCursos.filter(obj => obj.alumno === parsedUser.username && 
        obj.estado === 'Solicitada');

    const [cursos, setCursos] = useState(cursosPendientes);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    id="box1"
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                    }}
                >
                </Box>
                <Box id="box2" sx={{ mt: 3, flexGrow: 1 }}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            cursos.map((curso) => (
                                <Grid key={curso.nombre} item xs={12} sm={4}>
                                    <CardAlumnoCurso curso={curso} solicitud={true}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}