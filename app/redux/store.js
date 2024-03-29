import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import customerReducer from './reducers/Customer';
import seatReducer from './reducers/SeatReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  userReducer: persistReducer(persistConfig, customerReducer),
  seatReducer: seatReducer

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);