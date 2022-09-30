import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogContent, Rating } from '@mui/material';
import PreviewCurso from '../views/PreviewCurso';

export default function CardPreviewCurso(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { nombre, materia, desc, valoracion, profesor } = props.curso;

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography color="text.secondary">
                        {materia}
                    </Typography>
                    <Typography color="text.secondary">
                        {profesor}
                    </Typography>
                    <Rating size="small" precision={0.5} name="read-only" value={valoracion} readOnly />
                    <Typography variant="body2">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='outlined' onClick={handleClickOpen}>Ver Curso</Button>
                </CardActions>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="lg"
            >
                <DialogContent>
                    <PreviewCurso curso={props.curso}/>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
