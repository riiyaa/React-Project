import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './board/boardSlice';
import { showModal } from './modal/modalSlice';
import singleBoardReducer from './singleBoard/singleBoardSlice';

export default configureStore({
  reducer: {
    boards: BoardReducer,
    singleBoard: singleBoardReducer,
    showModal: showModal.reducer
  },
})