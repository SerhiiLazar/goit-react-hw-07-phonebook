import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialState = {
    value: [],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.value.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }, 
                };
            },
        },
        deleteContacts(state, action) {
            const index = state.value.findIndex(value => value.id === action.payload);
            state.value.splice(index, 1);
        },
    }

});

export const { addContacts, deleteContacts} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.value;
