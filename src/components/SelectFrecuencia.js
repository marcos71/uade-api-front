import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SelectFrecuencia(props) {
    const { children, value, index, onChange, disabled, ...other } = props;
    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">Frecuencia</InputLabel>
            <Select value={value} disabled={disabled} onChange={onChange} label="Frecuencia">
                <MenuItem value={"Unica"}>Unica</MenuItem>
                <MenuItem value={"Semanal"}>Semanal</MenuItem>
                <MenuItem value={"Mensual"}>Mensual</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SelectFrecuencia;