import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/auth-slice';
import userSlice from '../slices/user-slice';
import filmSlice from '../slices/films-slice';
import searchSlice from '../slices/search-slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        films: filmSlice,
        search: searchSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
