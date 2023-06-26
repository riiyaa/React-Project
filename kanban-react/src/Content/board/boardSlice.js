

import { createSlice, current } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: localStorage.getItem('boards') ? JSON.parse(localStorage.getItem('boards')) : [],
  reducers: {
    addBoard: (state, action) => {
        const {payload} = action;
        localStorage.setItem('boards',JSON.stringify([...state,{
          name:payload,
          columns:[
            {colName:'ABC',task:[{title:'Title',content:'Content'}]},
            {colName:'Xyz',task:[{title:'Title',content:'Content'}]},
          ]
        }]))
      return [...state, {
        name:payload,
        columns:[
          {colName:'ABC',task:[{title:'Title',content:'Content'}]},
          {colName:'Xyz',task:[{title:'Title',content:'Content'}]},
        ]
      }];
    },
    deleteBoard:(state, action) => {
        const {payload} = action;
        // const index = state.findIndex(b => b === payload);
        // if(index === -1){
        //   return;
        // }
        localStorage.setItem('boards',JSON.stringify(state.filter((elem ,ind) => elem.name !== payload)))
        return state.filter((elem ,ind) => elem.name !== payload)
    },
    addBoardColumn : (state, action) =>{
      const {payload} = action
      const currentState = state
      payload.array.map((data)=>{
        currentState[payload.index].columns.push({colName:data,task:[{title:'Title',content:'Content'}]})
      })
      localStorage.setItem('boards',JSON.stringify([...currentState]))
      return currentState
    }
  },
})



// Action creators are generated for each case reducer function

export default boardSlice.reducer
export const {addBoard, deleteBoard,addBoardColumn} = boardSlice.actions;
