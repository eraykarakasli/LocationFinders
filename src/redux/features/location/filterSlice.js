// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { town: "", vehicle: "", search: "" },
  reducers: {
    setTownFilter: (state, action) => {
      state.town = action.payload;
    },
    setVehicleFilter: (state, action) => {
      state.vehicle = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.search = action.payload;
    },
    
  },
});

export const { setTownFilter, setVehicleFilter, setSearchFilter } = filterSlice.actions;
export default filterSlice.reducer;

