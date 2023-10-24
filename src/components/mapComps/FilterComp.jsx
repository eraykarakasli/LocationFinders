import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTownFilter, setVehicleFilter } from '../../redux/features/location/filterSlice';

function FilterComp() {
    const dispatch = useDispatch()
    const [filters, setFilters] = useState({ town: "", vehicle: "" });

    const vehicleChange = (event) => {
        setFilters({ ...filters, vehicle: event.target.value });
        dispatch(setVehicleFilter(event.target.value));
    };
    const townChange = (event) => {
        setFilters({ ...filters, town: event.target.value });
        dispatch(setTownFilter(event.target.value));
    };


    //console.log(filters.town, filters.vehicle)
    return (
        <div className='flex gap-5 h-14 '>
            <Box className="bg-white rounded-md w-1/2" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel  id="demo-simple-select-label">Town</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filters.town}
                        label="Town"
                        onChange={townChange}
                    >
                        <MenuItem value={"hepsi"}>Hepsi</MenuItem>
                        <MenuItem value={"kadikoy"}>Kadıköy</MenuItem>
                        <MenuItem value={"beylikduzu"}>beylikdüzü</MenuItem>
                        <MenuItem value={"esenyurt"}>esenyurt</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className="bg-white rounded-md w-1/2" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel className='text-white' id="demo-simple-select-label">Vehicle</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filters.vehicle}
                        label="Vehicle"
                        onChange={vehicleChange}
                    >
                        <MenuItem value={"hepsi"}>Hepsi</MenuItem>
                        <MenuItem value={"otobus"}>Otobüs</MenuItem>
                        <MenuItem value={"minibus"}>Minibüs</MenuItem>
                        <MenuItem value={"servis"}>Servis</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default FilterComp