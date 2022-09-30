import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { createTheme, CssBaseline, Divider, Grid, List, ListItem, ListItemText, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import dataComentarios from '../data/valoraciones.json';

const theme = createTheme();

export default function PreviewValoracion(props) {
    const { id, valoracion } = props.curso;
    const valoracionesCurso = dataComentarios.filter(obj => obj.curso == id && obj.publicado);
    const [comentarios, setComentarios] = useState(valoracionesCurso);

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
                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                            {comentario.usuario}
                                                            {comentario.valoracion && <Rating value={comentario.valoracion} precision={0.5} size="small" readOnly />}
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
            </Grid>
        </ThemeProvider >
    );
}
