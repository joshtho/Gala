import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


// export const fetchArtwork = createAsyncThunk("artwork/fetchArtwork", async function() {
//     return fetch("/artworks")
//     .then(r => r.json())
//     .then(state => state)
// })

export const addNewArtwork = createAsyncThunk("artwork/addNewArtwork", async function(formData) {
    return fetch("/artworks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(state => state)
})

export const updateArtwork = createAsyncThunk("artwork/updateArtwork", async function ({formData, artworkId}) {
    return fetch(`/artworks/${artworkId}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
    })
    .then(r => r.json())
    .then(state => state)
})

const initialState = {
    entities: [],
    artworkObj: null,
    errors: null,
    status: "idle",
}

const artworkSlice = createSlice({
    name: 'artwork',
    initialState,
    reducers: {
        resetArtworkObj: (state) => {
            state.artworkObj = null
        },
        clearArtworkErrors: state => {state.errors = null},
        removeArtwork: (state, action) => {
            fetch(`/artworks/${action.payload}`,{method: "DELETE"})
            state.entities = state.entities.filter(artwork => artwork.id !== action.payload)
        }
    },
    extraReducers:
    (builder) => {
        builder
        // .addCase(fetchArtwork.pending, (state) => {
        //     state.status = "loading"
        // })
        // .addCase(fetchArtwork.fulfilled, (state, action) => {
        //     state.entities = action.payload
        //     state.status = "idle"
        // })
        .addCase(addNewArtwork.pending, (state) => {
            state.status = "loading"
        })
        .addCase(addNewArtwork.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities.push(action.payload)
                state.artworkObj = action.payload
                state.status = "idle"
            }
        })

        .addCase(updateArtwork.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities = state.entities.filter(artwork => artwork.id !== action.payload.id)
                state.entities.push(action.payload)
                state.artworkObj = action.payload
            }
        })
    }
})

export const {removeArtwork, resetArtworkObj, clearArtworkErrors} = artworkSlice.actions
export default artworkSlice.reducer