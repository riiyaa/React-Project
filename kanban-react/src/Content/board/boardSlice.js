

import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: [],
  reducers: {
    addBoard: (state, action) => {
        const {payload} = action;
      return [...state, payload];
    },
    deleteBoard: (state, action) => {
        const {payload} = action;

        return state.filter((it, index) => index !== payload)
    }
  },
})



// Action creators are generated for each case reducer function

export default boardSlice.reducer
export const {addBoard, deleteBoard} = boardSlice.actions;
