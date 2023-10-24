import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  api: "AIzaSyCQ2QL9rfu7_3yabhVa2bggFGAmmRoR-u4",
}

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { } = apiSlice.actions

export default apiSlice.reducer