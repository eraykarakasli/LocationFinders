import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLoc: [41.00994, 28.625046],
  currentLoading: true,
};

const currentLocSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    setCurrentLoc: (state, action) => {
      state.currentLoc = action.payload;
    },
    setCurrentLoading: (state, action) => {
      state.currentLoading = action.payload;
    },
  },
});

export const { setCurrentLoc, setCurrentLoading } = currentLocSlice.actions;
export default currentLocSlice.reducer;

