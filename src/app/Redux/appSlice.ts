import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type AppState = {
    theme: "light" | "dark",
}

const initialState: AppState = {
    theme: "light",
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string|null>) => {
            if (action.payload === "light" || action.payload === "dark") {
                state.theme = action.payload
            }
        },
    },
});

export const { changeTheme } = appSlice.actions;
export const selectApp = (state: RootState) => state.app;

export default appSlice;
