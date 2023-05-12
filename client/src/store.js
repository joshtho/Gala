import { configureStore } from "@reduxjs/toolkit";
import artworkReducer from "./features/artworkSlice"

const store = configureStore({
    reducer: {
        artwork: artworkReducer
    }
})

export default store;