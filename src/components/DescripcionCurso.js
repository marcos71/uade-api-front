import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, createTheme, CssBaseline, InputAdornment, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import cursosJson from "../data/cursos.json"
import { useState } from 'react';
import { useEffect } from 'react';

const theme = createTheme();

export default function DescripcionCurso() {
    const [nombre, setNombre] = useState('');
    const [materia, setMateria] = useState('');
    const [duracion, setDuracion] = useState('');
    const [costo, setCosto] = useState('');
    const [frecuencia, setFrecuencia] = useState('');
    const [desc, setDesc] = useState('');
    const [readOnly, setReadOnly] = useState(true);
    const navigate = useNavigate();
    const params = useParams();

    //get id from url
    const { id } = params;

    //use id to load course from API
    const curso = cursosJson.find(obj => obj.id === id);

    useEffect(() => {
        if (curso) {
            setNombre(curso.nombre);
            setMateria(curso.materia);
            setDuracion(curso.duracion);
            setCosto(curso.costo);
            setFrecuencia(curso.frecuencia);
            setDesc(curso.desc);
        }
    }, [nombre, materia, costo, duracion, frecuencia, desc]);

    //throw error if no course found

    const handleSave = () => {
        navigate('/profesor');
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            
                <Typography variant="h6" gutterBottom>
                    Curso: {nombre}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Nombre del Curso"
                            value={nombre}
                            fullWidth
                            disabled={readOnly}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Materia"
                            value={materia}
                            fullWidth
                            disabled={readOnly}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            label="Duracion"
                            fullWidth
                            type="number"
                            value={duracion}
                            disabled={readOnly}
                            variant="standard"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Hs</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Costo"
                            type="number"
                            fullWidth
                            value={costo}
                            disabled={readOnly}
                            variant="standard"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Frecuencia"
                            value={frecuencia}
                            fullWidth
                            disabled={readOnly}
                            variant="standard"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            label="Descripcion"
                            fullWidth
                            value={desc}
                            variant="standard"
                            multiline
                            disabled={readOnly}
                            maxRows={4}
                        />
                    </Grid>

                    <Grid item>
                        {
                            readOnly?
                            <Button variant='contained' onClick={() => setReadOnly(false)}>
                                Editar
                            </Button> : 
                            <Button variant='contained' onClick={handleSave}>
                                Guardar
                            </Button>
                        }
                    </Grid>
                </Grid>

        </ThemeProvider>

    );
}