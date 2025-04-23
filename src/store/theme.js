import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialThemeState = {
    mode: 'light',
    uiColor: '#2176AE',
    theme: {
        color: 'rgb(0, 31, 63)',
        backgroundColor: "rgb(237, 249, 254)",
        backgroundColorCanvasAnimate: "rgba(237, 249, 254, .2)",
        boidColor: 'rgba(28,106,222,0.2)'
    },
    nonThemeColor: 'black'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        changeThemeColor(state, action) {
            state.theme.color = action.payload;
        },
        setMode(state, action) {
            console.log(action.payload);
            if (action.payload === 'dark') {
                state.mode = 'dark';
                state.theme.color = 'cyan';
                state.theme.backgroundColor = 'rgb(0, 31, 63)';
                state.theme.boidColor = 'rgba(50, 60, 80, 0.2)';
                state.nonThemeColor = 'white';
            } else {
                state.mode = 'light';
                state.theme = initialThemeState.theme;
                state.nonThemeColor = 'black';
            }
        }
    }
});
const store = configureStore({
    reducer: themeSlice.reducer
});

export const themeActions = themeSlice.actions;
export default store;