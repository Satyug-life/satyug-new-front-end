import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userDetails/userSlice';
import loaderReducer from '../redux/loader'
export const store = configureStore({
  reducer: {
    userDetails: userReducer,
    loader: loaderReducer,

  },
});
