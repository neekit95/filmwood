import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '@lib/types';

const initialState: UserState = {
    username: undefined,
    email: undefined,
    password: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setUserPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { setUsername, setUserPassword, setUserEmail } = userSlice.actions;
export default userSlice.reducer;
