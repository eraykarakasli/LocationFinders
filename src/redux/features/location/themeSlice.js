// themeSlice.js (veya benzer bir dosya)
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: true, // başlangıç değeri burada belirleniyor 
  reducers: {
    setTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
