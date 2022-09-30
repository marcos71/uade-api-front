import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DescripcionCurso from '../components/DescripcionCurso';
import ValoracionCurso from '../components/ValoracionCurso';
import { useParams } from 'react-router-dom';
import cursosJson from "../data/cursos.json"
import { useState } from 'react';
import TabPanel from '../components/TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
    const params = useParams();
    
    // Obtener id de curso de la URL
    const { id } = params;
    
    // Llamar a la API para obtener el curso por id
    const cursoObj = cursosJson.find(obj => obj.id === id);

    const [value, setValue] = useState(0);
    const [curso, setCurso] = useState(cursoObj);

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
        <DescripcionCurso curso={curso}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ValoracionCurso curso={curso}/>
      </TabPanel>
    </Box>
  );
}
