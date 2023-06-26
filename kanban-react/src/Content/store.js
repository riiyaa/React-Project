import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './board/boardSlice';
import { showModal } from './modal/modalSlice';
import singleBoardReducer from './singleBoard/singleBoardSlice';
import  boardColumnReducer  from './boardColumns/boardColumnsSlice';

export default configureStore({
  reducer: {
    boards: BoardReducer,
    singleBoard: singleBoardReducer,
    showModal: showModal.reducer,
    boardColumns:boardColumnReducer
  },
})