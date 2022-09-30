import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DetalleCursoAlumno from '../components/DetalleCursoAlumno';
import ValoracionCursoAlumno from '../components/ValoracionCursoAlumno';
import cursosJson from "../data/cursos.json"
import { useNavigate, useParams } from 'react-router-dom';
import TabPanel from '../components/TabPanel';
import PreviewValoracion from '../components/PreviewValoracion';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PreviewCurso(props) {
    //get id from url
    const { id } = props.curso;
    
    //use id to load course from API
    const cursoObj = cursosJson.find(obj => obj.id === id);

    //throw error if no course found
    //navigate('/alumno/cursos');
    
    const [value, setValue] = React.useState(0);
    const [curso, setCurso] = React.useState(props.curso);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Descripcion General" {...a11yProps(0)} />
                    <Tab label="Valoraciones" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <DetalleCursoAlumno curso={curso}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PreviewValoracion curso={curso}/>
            </TabPanel>
        </Box>
    );
}