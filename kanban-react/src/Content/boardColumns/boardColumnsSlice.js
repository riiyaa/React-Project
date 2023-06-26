import { createSlice } from '@reduxjs/toolkit'

export const boardColumns = createSlice({
  name: 'boardColumns',
  initialState: localStorage.getItem('columns') ? JSON.parse(localStorage.getItem('columns')) : [],
  reducers: {
    addColumn: (state, action) => {
        const {payload} = action;
        localStorage.setItem('columns',JSON.stringify([...state,payload]))
      return [...state, payload];
    },
    
  },
})



// Action creators are generated for each case reducer function

export default boardColumns.reducer
export const {addColumn} = boardColumns.actions;
