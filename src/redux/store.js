import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import darkModeReducer from './theme/darkModeSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        dark_mode: darkModeReducer,
    },
});
