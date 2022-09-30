import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, createTheme, CssBaseline, Divider, Grid, List, ListItem, ListItemText, TextField, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import dataComentarios from '../data/valoraciones.json'
import { useEffect } from 'react';

const theme = createTheme();

export default function ValoracionCursoAlumno(props) {
  const logedUser = localStorage.getItem('logedUser');
  const parsedUser = JSON.parse(logedUser);

  const { id, valoracion, estado } = props.curso;
  // Llamar a la API para obtener los comentarios publicados del curso
  const valoracionesCurso = dataComentarios.filter(obj => obj.curso == id && obj.publicado);
  const [comentarios, setComentarios] = useState(valoracionesCurso);

  const [valoracionUser, setValoracionUser] = useState(0);
  const [comentario, setComentario] = useState();
  const [msjRechazo, setMsjRechazo] = useState();
  const [comentarioEnviado, setComentarioEnviado] = useState(false);

  // Validar si no existe una solicitud pendiente para este curso y alumno, entonces ignorar el boton de contratar

  const { contratar } = props;


  useEffect(() => {
    const valoracionUsuario = comentarios.find(obj => obj.usuario === parsedUser.username);
    if (valoracionUsuario) {
      setValoracionUser(valoracionUsuario.valoracion);
      if (valoracionUsuario.comentario) {
        setComentario(valoracionUsuario.comentario);
        setComentarioEnviado(true);
      }
      if (valoracionUsuario.msjRechazo) {
        setMsjRechazo(valoracionUsuario.msjRechazo);
      }
    }
  }, [comentarios]);

  const handleCalificar = () => {
    // Llamar a la API para guardar el rating en el curso
  };

  const handleEnviarComentario = () => {
    // Llamar a la API para guardar el mensaje del comentario

    // Si fue guardado correctamente
    setComentarioEnviado(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Valoracion del curso</Typography>
        <Rating name="read-only" value={valoracion} readOnly precision={0.5} />
      </Box>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Box>
            <Typography component="legend">Comentarios</Typography>
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                {
                  comentarios && comentarios.map((comentario, index) => (
                    !comentario.rechazado && comentario.publicado &&
                    <React.Fragment key={comentario.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                              {comentario.usuario}
                              {comentario.valoracion && <Rating value={comentario.valoracion} precision={0.5} size="small" readOnly/>}
                            </Box>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {comentario.comentario}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      {index < comentarios.length && <Divider variant="inset" component="li" />}
                    </React.Fragment>
                  ))
                }
              </List>
            </Box>
          </Box>
        </Grid>
        { !contratar &&
          (estado === 'Aceptado' || estado === 'Finalizado') &&
          <Grid item xs={8}>
            <Typography component="legend">Deja tu reseña</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Rating size='large' value={valoracionUser} precision={0.5} onChange={(e, newValue) => setValoracionUser(newValue)} />
              <Button variant="outlined" onClick={handleCalificar} sx={{ display: 'flex', alignItems:'flex-end'}}>Calificar</Button>
            </Box>
            <Box>
              <Box>
                <TextField
                  label="Deja tu comentario"
                  multiline
                  maxRows={4}
                  fullWidth
                  disabled={comentarioEnviado}
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                {!comentarioEnviado && <Button variant="outlined" onClick={handleEnviarComentario}>Enviar comentario</Button>}
              </Box>
            </Box>
            <Typography>{msjRechazo}</Typography>
          </Grid>
        }
      </Grid>
    </ThemeProvider >
  );
}
