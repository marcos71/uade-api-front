import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';

export default function CardAlumnoCurso(props) {
    const navigate = useNavigate();

    //deberia tener una ID de curso
    const { nombre, materia, desc, id, valoracion, profesor, estado } = props.curso;

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
                    <Button size="small" variant='outlined' onClick={() => navigate(`/alumno/curso/${id}`)}>Ver Curso</Button>
                </CardActions>

            </Card>
        </Box>
    );
}
