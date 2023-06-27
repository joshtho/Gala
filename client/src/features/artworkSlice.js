import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchArtwork = createAsyncThunk("artwork/fetchArtwork", async function() {
    return fetch("/artworks")
    .then(r => r.json())
    .then(state => state)
})

export const addNewArtwork = createAsyncThunk("artwork/addNewArtwork", async function(formData) {
    return fetch("/artworks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(state => state)
})

const initialState = {
    entities: [],
    artworkObj: null,
    status: "idle",
}

const artworkSlice = createSlice({
    name: 'artwork',
    initialState,
    reducers: {
        noUserArtworks: (state) => {
            Object.assign(state, initialState)
        },
        resetArtworkObj: (state) => {
            state.artworkObj = null
        }
    },
    extraReducers:
    (builder) => {
        builder
        .addCase(fetchArtwork.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchArtwork.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = "idle"
        })
        .addCase(addNewArtwork.pending, (state) => {
            state.status = "loading"
        })
        .addCase(addNewArtwork.fulfilled, (state, action) => {
            state.entities.push(action.payload)
            state.artworkObj = action.payload
            state.status = "idle"
        })
    }
})

export const {noUserArtworks, resetArtworkObj} = artworkSlice.actions
export default artworkSlice.reducer