import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios";

axios.defaults.baseURL = "https://63c91355320a0c4c954009fb.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchALL",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }


);


export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );