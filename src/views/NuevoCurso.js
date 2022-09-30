import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, createTheme, CssBaseline, FormControl, InputAdornment, InputLabel, MenuItem, Select, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function NuevoCurso() {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/home/profesor');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{ mb: 4, mt: 1 }}>
        <Typography variant="h6" gutterBottom>
          Nuevo Curso
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Nombre del Curso"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Materia"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Duracion"
              fullWidth
              type="number"
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
              variant="standard"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel>Frecuencia</InputLabel>
              <Select label="Frecuencia">
                <MenuItem value={"Unica"}>Unica</MenuItem>
                <MenuItem value={"Semanal"}>Semanal</MenuItem>
                <MenuItem value={"Mensual"}>Mensual</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <TextField
              label="Descripcion"
              fullWidth
              variant="standard"
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={handleSave}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}