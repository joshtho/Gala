import { configureStore } from "@reduxjs/toolkit";
import artworkReducer from "./features/artworkSlice"
import sessionReducer from "./features/sessionSlice"

const store = configureStore({
    reducer: {
        artwork: artworkReducer,
        user: sessionReducer
    }
})

export default store;