import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isUserAuth: boolean;
}
const initialState: AuthState = {
    isUserAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isUserAuth = true;
        },
        logout: (state) => {
            state.isUserAuth = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
