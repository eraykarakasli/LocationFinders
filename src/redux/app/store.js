import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/location/counterSlice'
import locationReducer from '../features/location/locationSlice'
import userReducer from '../features/users/userSlice'
import filterReducer from '../features/location/filterSlice'
import apiReducer from '../features/api/apiSlice'
import currentLocReducer from '../features/location/currentLocSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    locat: locationReducer,
    user: userReducer,
    filter: filterReducer,
    api: apiReducer,
    current: currentLocReducer,
  },
})