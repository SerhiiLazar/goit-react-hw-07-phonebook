import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {fetchContacts, addContact, deleteContact} from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
    extraReducers: builder => {
      builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions("pending")), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions("fulfilled")), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    }
});

export const contactsReducer = contactsSlice.reducer;


