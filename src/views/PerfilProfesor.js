import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { Box, Button, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from "moment/moment";

const theme = createTheme();

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
        setRows(newArray);
    };

    const handleSave = () => {
        // Llamar a la API para actualizar los datos del usuario
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 1,
                    marginRight: 1,
                    alignItems: 'inherit',
                }}
            >
                {rows &&
                    <Grid container>
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
                        </TableContainer>
                    </Grid>
                }
                <Grid container spacing={3} sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} sm={1}>
                        <Typography>
                            Titulo:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField onChange={handleChangeTitulo} helperText={errorMessage} error={isError}></TextField>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Typography>
                            Fecha:
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DesktopDatePicker
                                inputFormat="DD/MM/YYYY"
                                value={fecha}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={2}>

                        <IconButton aria-label="delete" onClick={handleAdd}>
                            <AddCircleIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Button variant="contained" onClick={handleSave}>Guardar</Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default PerfilProfesor;
