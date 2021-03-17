import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'dark_mode',
    initialState: {
        color: localStorage.getItem('dark_mode') || 'light',
        checked: localStorage.getItem('dark_mode_checked') || 'false',
    },
    reducers: {
        toggleDarkMode: state => {
            const c_temp = state.color === 'light' ? 'dark' : 'light';
            localStorage.setItem('dark_mode', c_temp);
            state.color = localStorage.getItem('dark_mode');
        },
        toggleDarkModeChecked: state => {
            const c_temp = state.color === 'light' ? 'false' : 'true';
            localStorage.setItem('dark_mode_checked', c_temp);
            state.checked = localStorage.getItem('dark_mode_checked');
        },
    },
});

export const { toggleDarkMode, toggleDarkModeChecked } = darkModeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.dark_mode.color)`
export const selectDarkMode = state => state.dark_mode.color;
export const selectDarkModeChecked = state => state.dark_mode.checked;

export default darkModeSlice.reducer;
