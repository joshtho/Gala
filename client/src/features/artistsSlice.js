import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchArtists = createAsyncThunk("artists/fetchArtists", async function() {
    return fetch("/artists")
    .then(r => r.json())
    .then(state => state)
})

const initialState = {
    entities: [],
    status: "idle"
}

const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {
        noUserArtists: (state) => {
            Object.assign(state, initialState)
        }
    },
    extraReducers:
    (builder) => {
        builder
        .addCase(fetchArtists.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchArtists.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = "idle"
        })
    }
})
export const {noUserArtists} = artistsSlice.actions
export default artistsSlice.reducer