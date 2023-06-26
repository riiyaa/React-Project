import { createSlice } from '@reduxjs/toolkit'

export const singleBoardSlice = createSlice({
  name: 'singleBoard',
  initialState:localStorage.getItem('boardName') ? localStorage.getItem('boardName') : '',
  reducers: {
    selectedBoard:(state,action) =>{
      const {payload} = action;
      const result = payload.array.find((it,ind)=>ind === payload.index)
      localStorage.setItem('boardName',result.name)
      return result.name
    }
  },
})



// Action creators are generated for each case reducer function

export default singleBoardSlice.reducer
export const {selectedBoard} = singleBoardSlice.actions;
