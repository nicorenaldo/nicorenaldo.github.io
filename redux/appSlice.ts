import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type AppState = {
    theme: "light" | "black",
}

const initialState: AppState = {
    theme: "black",
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeTheme: (state) => {
            if (state.theme === 'light') {
                state.theme = 'black'
            } else {
                state.theme = 'light'
            }
        },
    },
});

export const { changeTheme } = appSlice.actions;
export const selectApp = (state: RootState) => state.app;

export default appSlice;
