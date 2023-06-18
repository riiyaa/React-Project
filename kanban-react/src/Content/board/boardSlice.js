

import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: [],
  reducers: {
    addBoard: (state, action) => {
        const {payload} = action;
      return [...state, payload];
    },
    deleteBoard:(state, action) => {
        const {payload} = action;
        const i= state.indexOf(payload);
        console.log('mvkfmk');
        state = state.splice(i,1)
        console.log('rrrrrrr');
        return state
    }
  },
})



// Action creators are generated for each case reducer function

export default boardSlice.reducer
export const {addBoard, deleteBoard} = boardSlice.actions;
