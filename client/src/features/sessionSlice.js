import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("user/fetchUser", async function() {
    return fetch("/me")
    .then(r => r.json())
    .then(state => state)
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
    entities: null,
    status: "idle"
}

const sessionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            fetch('/logout', { method: "DELETE"})
            state.entities = null
            state.status = "idle"
            // Object.assign(state, initialState)
        }
    },
    extraReducers: 
        (builder) => {
            builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.entities = action.payload
                state.status = "idle"
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.entities = action.payload
                state.status = "idle"            
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.entities = action.payload
                state.status = "idle"
            })
        }
        
        // [fetchUser.pending](state) {
        //     state.status = "loading"
        // },
        // [fetchUser.fulfilled](state, action) {
        //     state.entities = action.payload
        //     state.status = "idle"
        // },
        // [loginUser.pending](state) {
        //     state.status = "loading"
        // },
        // [loginUser.fulfilled](state, action) {
        //     state.entities = action.payload
        //     state.status = "idle"
        // }

    
})
export const {logoutUser} = sessionSlice.actions
export default sessionSlice.reducer