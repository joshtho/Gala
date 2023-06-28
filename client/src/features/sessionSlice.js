import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("user/fetchUser", async function() {
    return fetch("/me")
    .then(r => {
        if (r.ok) {
        return r.json().then(state => state)
    } else {
        console.log(r.statusText)
    }
})
   
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
        artworks: []
    },
    loggedIn: false,
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
        addArtistToUser: (state, action) => {
            state.entities.artists.push(action.payload)
        },
        addArtworkToUser: (state, action) => {
            state.entities.artworks.push(action.payload)
        },
        updateUserArtists: (state, action) => {
            state.entities.artists = state.entities.artists.filter(artist => artist.id !== action.payload.id)
            state.entities.artists.push(action.payload)
        },
        updateUserArtwork: (state, action) => {
            state.entities.artworks = state.entities.artworks.filter(artist => artist.id !== action.payload.id)
            state.entities.artworks.push(action.payload)
        }
    },
    extraReducers: 
        (builder) => {
            builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.entities = action.payload
                action.payload ? state.loggedIn = true : state.loggedIn = false
                state.status = "idle"
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.entities = action.payload
                state.loggedIn = true
                state.status = "idle"            
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.entities = action.payload
                state.loggedIn = true
                state.status = "idle"
            })
        }

    
})
export const {
    logoutUser, 
    addArtworkToUser, 
    addArtistToUser, 
    updateUserArtists,
    updateUserArtwork
} = sessionSlice.actions
export default sessionSlice.reducer