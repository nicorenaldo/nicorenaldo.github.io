import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
        changeTheme: (state, action: PayloadAction<string | null>) => {
            if (action.payload === 'light' || action.payload === 'black') {
                state.theme = action.payload
            }
        },
    },
});

export const { changeTheme } = appSlice.actions;
export const selectApp = (state: RootState) => state.app;

export default appSlice;
