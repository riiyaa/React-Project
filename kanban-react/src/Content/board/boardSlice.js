

import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: localStorage.getItem('boards') ? JSON.parse(localStorage.getItem('boards')) : [],
  reducers: {
    addBoard: (state, action) => {
        const {payload} = action;
        localStorage.setItem('boards',JSON.stringify([...state,payload]))
      return [...state, payload];
    },
    deleteBoard:(state, action) => {
        const {payload} = action;
        // const index = state.findIndex(b => b === payload);
        // if(index === -1){
        //   return;
        // }
        localStorage.setItem('boards',JSON.stringify(state.filter((elem ,ind) => elem !== payload)))
        return state.filter((elem ,ind) => elem !== payload)
    },
    selectedBoard:(state,action) =>{
      const {payload} = action;
      console.log(payload);
      const result = payload.array.find((it,ind)=>ind==payload.index)
      console.log(result);
      return result
    }
  },
})



// Action creators are generated for each case reducer function

export default boardSlice.reducer
export const {addBoard, deleteBoard,selectedBoard} = boardSlice.actions;
