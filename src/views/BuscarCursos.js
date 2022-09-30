import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, createTheme, CssBaseline, FormControl, InputAdornment, InputLabel, MenuItem, Rating, Select, ThemeProvider } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SelectFrecuencia from '../components/SelectFrecuencia';
import dataCursos from '../data/cursos.json';
import CardAlumnoCurso from '../components/CardCursoAlumno';
import CardPreviewCurso from '../components/CardPreviewCurso';

const theme = createTheme();

/*nombre materia duracion costo frecuencia desc?*/

export default function BuscarCursos(props) {
  const navigate = useNavigate();
  const [tipoBusqueda, setTipoBusqueda] = useState('Materia');
  const [ratingValue, setRatingValue] = useState(0);
  const [materiaValue, setMateriaValue] = useState('');
  const [frecuenciaValue, setFrecuenciaValue] = useState('Unica');
  const [cursos, setCursos] = useState([]);
  const { preview } = props;

  const handleBuscarCursos = () => {
    if (tipoBusqueda === 'Materia') {
      const newArray = dataCursos.filter(obj => obj.nombre.toLowerCase().includes(materiaValue.toLowerCase()));
      setCursos(newArray);
    } else if (tipoBusqueda === 'Frecuencia') {
      const newArray = dataCursos.filter(obj => obj.frecuencia === frecuenciaValue);
      setCursos(newArray);
    } else if (tipoBusqueda === 'Rating') {

    } else {

    }
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{ mb: 4, mt: 1 }}>
        <Typography variant="h6" gutterBottom>
          Buscar Cursos
        </Typography>
        <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center' }}>

          <Grid item xs={12} sm={3}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">Tipo de Busqueda</InputLabel>
              <Select value={tipoBusqueda} onChange={(e) => setTipoBusqueda(e.target.value)} label="Tipo de Busqueda">
                <MenuItem value={"Materia"}>Materia</MenuItem>
                <MenuItem value={"Frecuencia"}>Frecuencia</MenuItem>
                <MenuItem value={"Rating"}>Rating</MenuItem>
                <MenuItem value={"Clase"}>Tipo de Clase</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {tipoBusqueda === 'Materia' ?
            <Grid item xs={12} sm={3}>
              <TextField
                required
                label="Materia"
                fullWidth
                value={materiaValue}
                onChange={(e) => setMateriaValue(e.target.value)}
                autoComplete="family-name"
                variant="standard"
              />
            </Grid>
            : tipoBusqueda === 'Frecuencia' ?
              <Grid item xs={12} sm={3}>
                <SelectFrecuencia value={frecuenciaValue} onChange={(e) => setFrecuenciaValue(e.target.value)} />
              </Grid>
              : tipoBusqueda === 'Rating' ?
                <Grid item xs={12} sm={3}>
                  <Rating
                    size='large'
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                      setRatingValue(newValue);
                    }}
                  />
                </Grid>
                : <></>
          }
          <Grid item xs={3}>
            <Button variant='contained' onClick={handleBuscarCursos}>
              Buscar
            </Button>
          </Grid>
        </Grid>
        <Box id="box2" sx={{ mt: 3, flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              cursos.map((curso) => (
                <Grid key={curso.nombre} item xs={12} sm={4}>
                  {preview ? <CardPreviewCurso curso={curso}/> : <CardAlumnoCurso curso={curso} contratar={true} />}
                </Grid>
              ))
            }

          </Grid>
        </Box>
      </Container>
    </ThemeProvider >
  );
}