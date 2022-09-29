import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { createTheme, CssBaseline, Divider, Grid, IconButton, List, ListItem, ListItemText, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import dataComentarios from '../data/valoraciones.json'
import { useParams } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ModalRechazo from './ModalRechazo';

const theme = createTheme();

export default function ValoracionCurso() {
  const params = useParams();
  const logedUser = localStorage.getItem('logedUser');
  const parsedUser = JSON.parse(logedUser);

  //read course id from url and get comments for it
  const { id } = params;
  const filteredComment = dataComentarios.filter(obj => obj.curso == id);
  const [comentarios, setComentarios] = useState(filteredComment);
  
  const [openModal, setOpenModal] = useState(false);
  const [rejectCommentId, setRejectCommentId] = useState();

  const handlePublishComment = (comentario) => {
    //call api to update comentario, then replace array memory obj with updated one
    const newArray = comentarios.slice();
    newArray.map(obj => {
      if (obj.id === comentario.id) {
        obj['publicado'] = true;
      }
    });
    setComentarios(newArray);
  };

  const handleOpenModal = (comentario) => {
    setRejectCommentId(comentario.id)
    setOpenModal(true);
  };

  /*
  useEffect(() => {
    //fetch comments from db using course id
    console.log('UseEffect');
    setComentarios(dataComentarios);
  }, [comentarios, openModal]);
  */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >

        <Typography component="legend">Valoracion del curso</Typography>
        <Rating name="read-only" value={5} readOnly precision={0.5}/>
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
          { 
            comentarios && comentarios.map((comentario, index) => (
              !comentario.rechazado && 
              <React.Fragment key={comentario.id}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={comentario.usuario}
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

                {!comentario.publicado &&
                  <Box sx={{display:'flex', flexDirection:'row'}}>
                    <IconButton onClick={() => handlePublishComment(comentario)}>
                      <ThumbUpIcon />
                    </IconButton>
                    <IconButton onClick={() => {handleOpenModal(comentario)}}>
                      <ThumbDownIcon />
                    </IconButton>
                  </Box>
                }
                </ListItem>
                {index < comentarios.length && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))
          }

        </List>
        <ModalRechazo open={openModal} closeModal={setOpenModal} idComentario={rejectCommentId}/>
      </Box>
    </ThemeProvider >
  );
}
