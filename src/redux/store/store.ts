import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import userSlice from '../slices/userSlice';
import filmSlice from '../slices/filmsSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        films: filmSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
