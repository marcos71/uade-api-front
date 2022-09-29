import { Box, Button, Container, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardProfCurso from "../components/CardCursoProfesor";
import cursosJson from "../data/cursos.json"

const theme = createTheme();

export default function CursosProfesor() {
    const logedUser = localStorage.getItem('logedUser');
    const parsedUser = JSON.parse(logedUser);

    // load from db for professor id
    const cursosProfesor = cursosJson.filter(obj => obj.profesor === parsedUser.username);

    const [cursos, setCursos] = useState(cursosProfesor);
    const navigate = useNavigate();

    const handleClick = (e) => {
        //const nuevosCursos = [...cursos, {'nombre':'nuevo curso'}];
        //setCursos(nuevosCursos);
        navigate('/profesor/nuevoCurso');
    };

    const handleDeleteCourse = (idCurso) => {
        const newArray = cursos.filter((obj) => obj.id !== idCurso);
        setCursos(newArray);
    };

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
                    <Button variant="contained" onClick={e => {handleClick(e)}}>
                        Crear
                    </Button>
                </Box>
                <Box id="box2" sx={{ mt: 3, flexGrow: 1 }}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            cursos.map((curso) => (
                                <Grid key={curso.nombre} item xs={12} sm={4}>
                                    <CardProfCurso curso={curso} onCourseDeleted={handleDeleteCourse}/>
                                </Grid>
                            ))
                        }

                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}