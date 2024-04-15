import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://661c20eae7b95ad7fa69c45d.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('https://661c20eae7b95ad7fa69c45d.mockapi.io/contacts')
            return resp.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const resp = await axios.post('https://661c20eae7b95ad7fa69c45d.mockapi.io/contacts', contact)
            return resp.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const resp = await axios.delete(`https://661c20eae7b95ad7fa69c45d.mockapi.io/contacts/${id}`)
            return resp.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
     }
 }
)