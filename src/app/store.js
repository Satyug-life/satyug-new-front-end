import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userDetails/userSlice';
export const store = configureStore({
  reducer: {
    userDetails: userReducer
  },
});
