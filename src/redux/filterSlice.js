import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setFilter(state, action) {
          state.value = action.payload;
      },
    },
  });
 
  export const { setFilter } = filterSlice.actions;
  export const filterReducer = filterSlice.reducer;

  export const getFilter = state => state.filter.value;