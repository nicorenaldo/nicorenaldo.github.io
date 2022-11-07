import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
    loggedIn: boolean,
    accessToken: string,
    refreshToken: string,
}

const initialState: AuthState = {
    loggedIn: false,
    accessToken: '',
    refreshToken: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        unauthenticate: (state) => {
            return { ...initialState }
        },
    },
    extraReducers: (builder) => { },
});

export const { unauthenticate } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
