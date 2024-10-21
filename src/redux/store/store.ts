import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/auth-slice';
import userSlice from '../slices/user-slice';
import filmSlice from '../slices/films-slice';

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
