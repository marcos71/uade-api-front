import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControlLabel, FormGroup, IconButton, Switch } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardCursoProfesor(props) {
    const navigate = useNavigate();

    //deberia tener una ID de curso
    const { nombre, materia, desc, id } = props.curso;

    //read state from curso obj
    const [published, setPublished] = useState(false);

    const handlePublish = (e) => {
        //call api to change state of course to published/unpublished
        setPublished(e.target.checked);
    };

    const handleDelete = () => {
        //call api to delete course
        props.onCourseDeleted(id);

        console.log('DELETE ', nombre);
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
                    <Button size="small" variant='outlined' onClick={() => navigate(`/curso/${id}`)}>Ver Curso</Button>
                    <FormGroup>
                        <FormControlLabel
                            checked={published}
                            labelPlacement='start'
                            control={<Switch />}
                            onChange={handlePublish}
                            label="Publicar" />
                    </FormGroup>
                    <IconButton aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
}
