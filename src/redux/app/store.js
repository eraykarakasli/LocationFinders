import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import counterReducer from '../features/location/counterSlice';
import locationReducer from '../features/location/locationSlice';
import userReducer from '../features/users/userSlice';
import filterReducer from '../features/location/filterSlice';
import apiReducer from '../features/api/apiSlice';
import currentLocReducer from '../features/location/currentLocSlice';
import themeReducer from '../features/location/themeSlice';

const persistConfig = {
  key: 'root', // Yerel depolama anahtarınızı burada belirleyin
  storage, // Kullandığınız yerel depolama seçeneğine göre burayı değiştirebilirsiniz
  whitelist: ["theme"], // Sadece "theme" reducer'ını persist et
};

const rootReducer = combineReducers({
  counter: counterReducer,
  locat: locationReducer,
  user: userReducer,
  filter: filterReducer,
  api: apiReducer,
  current: currentLocReducer,
  theme: themeReducer,
  // Diğer reducer'larınızı burada ekleyin
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Diğer yapılandırmalar
});

export const persistor = persistStore(store);
