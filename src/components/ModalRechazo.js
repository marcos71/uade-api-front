import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
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
        // LLamar a la API para actualizar el comentario y setearlo como rechazado y cargar el mensaje de rechazo

        // Agregar callback para refrescar pagina padre
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth >
            <DialogTitle>Rechazar comentario</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Motivo de rechazo"
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
