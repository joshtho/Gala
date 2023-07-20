import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async function () {
    return fetch('/notes')
    .then(r => r.json())
    .then(state => state)
})

export const addNote = createAsyncThunk("notes/addNote", async function (noteData) {
    return fetch("/notes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(noteData)
    })
    .then(r => r.json())
    .then(state => state)
})
export const updateNote = createAsyncThunk("notes/editNote", async function (noteData) {
    return fetch(`/notes/${noteData.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(noteData)
    })
    .then(r => r.json())
    .then(state => state)
})

const initialState = {
    entities: [],
    noteObj: null,
    status: 'idle'
}

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        resetNoteObj: (state) => {
            state.noteObj = null
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchNotes.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = 'idle'
        })
        .addCase(addNote.fulfilled, (state, action) => {
            state.entities.push(action.payload)
            state.noteObj = action.payload
        })
        .addCase(updateNote.fulfilled, (state, action) => {
            state.entities = state.entities.filter(note => action.payload.id !== note.id)
            state.entities.push(action.payload)
            state.noteObj = action.payload
        })
    }
})

export const {resetNoteObj} = noteSlice.actions
export default noteSlice.reducer