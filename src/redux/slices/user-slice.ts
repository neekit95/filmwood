import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
};

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
