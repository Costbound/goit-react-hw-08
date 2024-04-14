import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.loading = true
}

const handleError = (state, action) => {
    state.loading = false
    state.error = action.payload
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, handleError)
        builder
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, handleError)
        builder
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                const i = state.items.findIndex(({ id }) => id === action.payload.id)
                state.items.splice(i, 1)
            })
            .addCase(deleteContact.rejected, handleError)
    }
})

export const contactsReducer = contactsSlice.reducer
