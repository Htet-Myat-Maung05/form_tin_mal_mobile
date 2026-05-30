import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeMode } from "@theme/types";

interface ThemeState {
    mode: ThemeMode;
};

const initialState: ThemeState = {
    mode: 'system'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload;
        },
        toggleTheme: (state) => {
            if (state.mode === 'light') state.mode = 'dark';
            else if (state.mode === 'dark') state.mode = 'light';
            else state.mode = 'light';
        }
    }
});

export const { setThemeMode, toggleTheme } = themeSlice.actions;

// Typed selectors
export const selectThemeMode = (state: { theme: ThemeState }) => state.theme.mode;