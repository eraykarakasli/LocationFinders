import { createSlice } from "@reduxjs/toolkit";
const initialState= {
  filteredUsers : [],
  loading: true,
}

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
       state.filteredUsers = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLocation,setLoading } = locationSlice.actions;

export default locationSlice.reducer;
