import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function ModalRechazo(props) {
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState();
    const { idComentario } = props;

    useEffect(() => {
        setOpen(props.open);
    }, [props.open])

    const handleClose = () => {
        setOpen(false);
        props.closeModal(false);
    }

    const handleRechazo = () => {
        // update comment with rejection message
        //console.log('COMENTARIO A RECHAZAR: ', idComentario);
        //console.log('MENSAJE A RECHAZAR: ', mensaje);

        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth >
            <DialogTitle>Rechazar comentario</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Motivo de rechazo"
                    type="email"
                    fullWidth
                    multiline
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleRechazo}>Enviar</Button>
            </DialogActions>
        </Dialog>
    );
}
