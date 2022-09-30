import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, createTheme, CssBaseline, InputAdornment, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SelectFrecuencia from './SelectFrecuencia';

const theme = createTheme();

export default function DescripcionCurso(props) {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState(props.curso.nombre);
    const [materia, setMateria] = useState(props.curso.materia);
    const [duracion, setDuracion] = useState(props.curso.duracion);
    const [costo, setCosto] = useState(props.curso.costo);
    const [frecuencia, setFrecuencia] = useState(props.curso.frecuencia);
    const [desc, setDesc] = useState(props.curso.desc);
    const [readOnly, setReadOnly] = useState(true);
    const handleSave = () => {
        navigate('/home/profesor');
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
                        onChange={(e) => setNombre(e.target.value)}
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
                        onChange={(e) => setMateria(e.target.value)}
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
                        onChange={(e) => setDuracion(e.target.value)}
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
                        onChange={(e) => setCosto(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SelectFrecuencia value={frecuencia} disabled={readOnly} onChange={(e) => setFrecuencia(e.target.value)}/>
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
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </Grid>

                <Grid item>
                    {
                        readOnly ?
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