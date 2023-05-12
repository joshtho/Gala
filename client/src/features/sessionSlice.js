import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return fetch("/me")
    .then(r => {
        if (r.ok) {
            r.json().then(user => user)
        } else {
            console.log("no user")
        }
    })
})

const initialState = {
    entities: [],
    status: "idle"
}

const sessionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUser.pending](state) {
            state.status = "loading"
        },
        [fetchUser.fulfilled](state, action) {
            state.entities = action.payload
            state.status = "idle"
        }
    }
})

export default sessionSlice.reducer