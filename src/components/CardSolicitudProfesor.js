import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function CardSolicitudProfesor(props) {
    const { nombre, materia, desc, mensaje, id } = props.curso;

    const [modalOpen, setModalOpen] = useState(false);

    const handleClickOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleAceptar = () => {
        // LLamar API para aceptar el curso solicitado
        props.onAceptarCurso(id);
        console.log('ACEPTAR');
    };

    const handleRechazar = () => {
        // LLamar API para rechazar el curso solicitado
        props.onRechazarCurso(id);
        console.log('RECHAZAR');
    };

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {nombre}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {materia}
                    </Typography>
                    <Typography variant="body2">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='outlined' onClick={handleAceptar}>Aceptar</Button>
                    <IconButton onClick={handleClickOpen}>
                        <EmailIcon />
                    </IconButton>
                    <IconButton onClick={handleRechazar}>
                        <ThumbDownIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Dialog
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Mensaje del Alumno"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {mensaje}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
