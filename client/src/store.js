import { configureStore } from "@reduxjs/toolkit";
import artworkReducer from "./features/artworkSlice"
import sessionReducer from "./features/sessionSlice"
import artistsReducer from "./features/artistsSlice";
import noteReducer from "./features/noteSlice"

const store = configureStore({
    reducer: {
        artwork: artworkReducer,
        user: sessionReducer,
        artists: artistsReducer,
        notes: noteReducer
    }
})

export default store;