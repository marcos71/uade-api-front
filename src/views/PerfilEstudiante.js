import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import { Button, MenuItem, RadioGroup, Select } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './PerfilEstudiante.css'
import moment from "moment/moment";

function PerfilEstudiante() {
    const [dateValue, setDateValue] = useState(moment);
    const [visible, setVisible] = useState(false);
    const [mock, setMock] = useState({});
    const [rows, setRows] = useState([]);
    const [i, setI] = useState(1);
    const [nivel, setNivel] = useState("Primario");
    const [titulo, setTitulo] = useState();
    const [estado, setEstado] = useState("curso");
    const [errorMessage, setErrorMessage] = useState();
    const [isError, setIsError] = useState(false);


    // leer el usuario del localStorage y si el rol no es alumno, mandar a login



    const createData = (nivel, titulo, estado) => {
        return { nivel, titulo, estado };
    }

    const handleChange = (newValue) => {
        setDateValue(newValue);
    };

    const handleChangeNivel = (newValue) => {
        console.log(newValue.target.value);
        setNivel(newValue.target.value);
    };

    const handleChangeTitulo = (newValue) => {
        console.log(newValue.target.value);
        setTitulo(newValue.target.value);
    };

    const handleChangeEstado = (newValue) => {
        console.log(newValue.target.value);
        setEstado(newValue.target.value);
    };

    const handleAdd = () => {

        //const list = mock;
        //console.log(mock);
        //let firstField = mock.test[mock.test.length - 1];
        //console.log(firstField === undefined);
        /*
        if (!mock.test) {
            mock.test = [];
        }
        */

        if (!titulo || titulo.length === 0) {
            setErrorMessage("Obligatorio");
            setIsError(true);
            return;
        }

        setErrorMessage();
        setIsError(false);

        //const newRow =  createData(nivel, titulo, estado, "asd");
        //rows.push(createData(nivel, titulo, estado, "asd"));
        const newRows = rows.concat(createData(nivel, titulo, estado));
        setRows(newRows);
        //rows = [createData(nivel, titulo, estado, "asd")]
        //console.log(rows);
        //mock.test.push(i);
        //setI(i + 1);
        //console.log(mock);
        //setMock(mock);
        //setVisible(!visible);
    };

    const onDeleteRow = (row) => {
        
        const newArray = rows.filter((obj, index) => index !== row);
        console.log(newArray);
        setRows(newArray);
    };

    const handleSave = () => {
        console.log(dateValue);
        console.log(rows);
    };


    return (
        <div className="create">
            {rows?
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nivel de Estudio</TableCell>
                                <TableCell align="right">Titulo</TableCell>
                                <TableCell align="right">Estado</TableCell>
                                <TableCell align="right">Eliminar</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.nivel}
                                    </TableCell>
                                    <TableCell align="right">{row.titulo}</TableCell>
                                    <TableCell align="right">{row.estado}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" onClick={() => onDeleteRow(index)}>
                                            <RemoveCircleIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <></>
            }

            <form>
                <div style={{ "display": "flex", "flexFlow": "row wrap", "alignItems": "center", "paddingRight": "10px" }}>
                    <label>
                        Fecha de nacimiento:
                    </label>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
                            inputFormat="DD/MM/YYYY"
                            value={dateValue}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                {
                    mock.test ?
                        <Grid>
                            {mock.test.map((user, index) =>
                                <div key={'div-' + user} style={{ "display": "flex", "flexFlow": "row wrap", "alignItems": "center", "paddingRight": "10px" }}>
                                    <input key={user} defaultValue="asd" />
                                </div>
                            )}
                        </Grid> : console.log('ERROR?')
                }
                <div style={{ "display": "flex", "flexFlow": "row wrap", "alignItems": "center" }}>
                    <label>
                        Nivel de estudios:
                    </label>
                    <Select value={nivel} onChange={handleChangeNivel}>
                        <MenuItem value={"Primario"}>Primario</MenuItem>
                        <MenuItem value={"Secundario"}>Secundario</MenuItem>
                        <MenuItem value={"Terciario"}>Terciario</MenuItem>
                        <MenuItem value={"Universitario"}>Universitario</MenuItem>
                    </Select>
                    <label>
                        Titulo:
                    </label>
                    <TextField onChange={handleChangeTitulo} helperText={errorMessage} error={isError}></TextField>
                    <label>
                        Estado:
                    </label>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={handleChangeEstado}
                        value={estado}
                    >
                        <FormControlLabel value="completo" control={<Radio />} label="Completo" />
                        <FormControlLabel value="curso" control={<Radio />} label="En curso" />
                    </RadioGroup>
                    <IconButton aria-label="delete" onClick={handleAdd}>
                        <AddCircleIcon />
                    </IconButton>
                    {visible && <div className="container">
                        Muestro contenido oculto
                    </div>}
                </div>
            </form>
            <Button variant="contained" onClick={handleSave}>Guardar</Button>
        </div>
    );
}

export default PerfilEstudiante;
