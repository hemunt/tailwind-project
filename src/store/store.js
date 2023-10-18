import { configureStore } from '@reduxjs/toolkit'
import colorsSlice from "./colorsSlice";

export default configureStore({
    reducer: {
        appColors: colorsSlice
    },
})