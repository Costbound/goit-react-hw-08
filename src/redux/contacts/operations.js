import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://661c20eae7b95ad7fa69c45d.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts')
            return resp.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.messagge)
        }
    }
)

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', contact)
            return resp.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.messagge)
        }
    }
)

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${id}`)
            return resp.data
        } catch (e) {
            thunkAPI.rejectWithValue(e.messagge)
     }
 }
)