import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { Button } from "@mui/material";
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

function PerfilProfesor() {
    const [fecha, setFecha] = useState(moment);
    const [rows, setRows] = useState([]);
    const [titulo, setTitulo] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [isError, setIsError] = useState(false);

    // leer el usuario del localStorage y si el rol no es profesor, mandar a login

    const createData = (titulo, fecha) => {
        return { titulo, fecha };
    }

    const handleChange = (newValue) => {
        setFecha(newValue);
    };

    const handleChangeTitulo = (newValue) => {
        console.log(newValue.target.value);
        setTitulo(newValue.target.value);
    };

    const handleAdd = () => {
        if (!titulo || titulo.length === 0) {
            setErrorMessage("Obligatorio");
            setIsError(true);
            return;
        }

        setErrorMessage();
        setIsError(false);

        const newRows = rows.concat(createData(titulo, fecha.format('DD/MM/YYYY')));
        setRows(newRows);
    };

    const onDeleteRow = (row) => {
        const newArray = rows.filter((obj, index) => index !== row);
        console.log(newArray);
        setRows(newArray);
    };

    const handleSave = () => {
        console.log(fecha);
        console.log(rows);
    };


    return (
        <div className="create">
            {rows?
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Titulo</TableCell>
                                <TableCell align="right">Fecha</TableCell>
                                <TableCell align="right">Eliminar</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{row.titulo}</TableCell>
                                    <TableCell align="right">{row.fecha}</TableCell>
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
                <div style={{ "display": "flex", "flexFlow": "row wrap", "alignItems": "center" }}>
                    <label>
                        Titulo:
                    </label>
                    <TextField onChange={handleChangeTitulo} helperText={errorMessage} error={isError}></TextField>
                    <label>
                        Fecha:
                    </label>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
                            inputFormat="DD/MM/YYYY"
                            value={fecha}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <IconButton aria-label="delete" onClick={handleAdd}>
                        <AddCircleIcon />
                    </IconButton>
                </div>
            </form>
            <Button variant="contained" onClick={handleSave}>Guardar</Button>
        </div>
    );
}

export default PerfilProfesor;
