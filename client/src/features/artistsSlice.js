import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchArtists = createAsyncThunk("artists/fetchArtists", async function() {
    return fetch("/artists")
    .then(r => r.json())
    .then(state => state)
})
export const addNewArtist = createAsyncThunk("artists/addNewArtist", async function(formData) {
    return fetch("/artists", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
})
    .then(r => r.json())
    .then(state => state)
})
export const updateArtist = createAsyncThunk("artists/updateArtist", async function ({formData, artistId}) {
    return fetch(`/artists/${artistId}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
    })
    .then(r => r.json())
    .then(state => state)
})

const initialState = {
    entities: [],
    artistObj: null,
    status: "idle"
}

const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {
        noUserArtists: (state) => {
            Object.assign(state, initialState)
        },
        resetArtistObj: (state) => {
            state.artistObj = null
        }
    },
    extraReducers:
    (builder) => (
        builder
        .addCase(fetchArtists.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchArtists.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = "idle"
        })
        .addCase(addNewArtist.pending, (state) => {
            state.status = "loading"
        })
        .addCase(addNewArtist.fulfilled, (state, action) => {
            state.entities.push(action.payload)
            state.artistObj = action.payload
            state.status = "idle"
        })
        .addCase(updateArtist.pending, state => {state.status = 'loading'})
        .addCase(updateArtist.fulfilled, (state, action) => {
            state.entities = state.entities.filter(artist => artist.id !== action.payload.id)
            state.entities.push(action.payload)
            state.artistObj = action.payload
        })
    )
})
export const {noUserArtists, resetArtistObj} = artistsSlice.actions
export default artistsSlice.reducer