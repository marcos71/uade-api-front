import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import { IconButton, Rating } from '@mui/material';
import { useState } from 'react';

export default function CardAlumnoCurso(props) {
    const navigate = useNavigate();
    const { nombre, materia, desc, id, valoracion, profesor, estado } = props.curso;
    const { contratar, solicitud } = props;

    const [finalizado, setFinaliado] = useState(estado === 'Finalizado' || estado === 'Cancelado');

    const handleNavigate = () => {
        if (contratar) {
            navigate(`/home/alumno/contratar/curso/${id}`)
        } else {
            navigate(`/home/alumno/curso/${id}`)
        }
    };

    const handleFinalizarCurso = () => {
        // Llamar a la API para cambiar el estado del curso a "Finalizado"
        console.log('FINALIZADO');
        setFinaliado(true);
    };

    const handleCanelarCurso = () => {
        // Llamar a la API para cambiar el estado del curso a "Cancelado"
        console.log('CANCELADO');
    };

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
                    <Button size="small" variant='outlined' onClick={handleNavigate}>Ver Curso</Button>

                    {!contratar ? solicitud ?
                        <IconButton onClick={handleCanelarCurso} >
                            <CancelIcon />
                        </IconButton> :
                        !finalizado &&
                        <IconButton onClick={handleFinalizarCurso} >
                            <CheckCircleIcon />
                        </IconButton>
                        : <></>
                    }
                </CardActions>
            </Card>
        </Box>
    );
}
