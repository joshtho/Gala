import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("user/fetchUser", async function() {
    return fetch("/me")
    .then(r => r.json())
    .then(state => state)
//     .then(r => {
//         if (r.ok) {
//         return r.json().then(state => state)
//     } 
// })
   
})

export const loginUser = createAsyncThunk("user/loginUser", async function(loginData) {
    return fetch("/login", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData),
    })
    .then(r => r.json())
    .then(state => state)
})

export const signupUser = createAsyncThunk("user/signupUser", async function (signupData) {
    return fetch("/signup", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(signupData)
    })
    .then(r => r.json())
    .then(state => state)
})

const initialState = {
    entities: {
        artists: [],
        artworks: [],
        notes: []
    },
    loggedIn: false,
    errors: null,
    status: "idle"
}

const sessionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            fetch('/logout', { method: "DELETE"})
            Object.assign(state, initialState)
        },
        clearSessionErrors: (state) => {
            state.errors = null
        },
        addArtistToUser: (state, action) => {
            state.entities.artists.push(action.payload)
        },
        addArtworkToUser: (state, action) => {
            state.entities.artworks.push(action.payload)
        },
        addNoteToUser: (state, action) => {
            state.entities.notes.push(action.payload)
        },
        updateUserNotes: (state, action) => {
            state.entities.notes = state.entities.notes.filter(note => note.id !== action.payload.id)
            state.entities.notes.push(action.payload)
        },
        updateUserArtists: (state, action) => {
            state.entities.artists = state.entities.artists.filter(artist => artist.id !== action.payload.id)
            state.entities.artists.push(action.payload)
        },
        updateUserArtwork: (state, action) => {
            state.entities.artworks = state.entities.artworks.filter(artwork => artwork.id !== action.payload.id)
            state.entities.artworks.push(action.payload)
        },
        removeArtworkFromUser: (state, action) => {
            state.entities.artworks = state.entities.artworks.filter(artwork => artwork.id !== action.payload)
        }
    },
    extraReducers: 
        (builder) => {
            builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    state.status = "idle"
                } else {
                    state.entities = action.payload
                    action.payload ? state.loggedIn = true : state.loggedIn = false
                    state.status = "idle"
                }
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    state.errors = action.payload.errors
                    state.status = "idle"
                } else {
                    state.entities = action.payload
                    state.loggedIn = true
                    state.status = "idle"            
                }

            })
            .addCase(signupUser.fulfilled, (state, action) => {
                if (action.payload.errors) {
                    state.errors = action.payload.errors
                    state.status = "idle"
                } else {
                    state.entities = action.payload
                    state.loggedIn = true
                    state.status = "idle"
                }

            })
        }

    
})
export const {
    logoutUser,
    clearSessionErrors, 
    addArtworkToUser, 
    addArtistToUser,
    addNoteToUser, 
    updateUserArtists,
    updateUserArtwork,
    updateUserNotes,
    removeArtworkFromUser
} = sessionSlice.actions
export default sessionSlice.reducer