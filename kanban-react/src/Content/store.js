import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './board/boardSlice';
import { showModal } from './modal/modalSlice';

export default configureStore({
  reducer: {
    boards: BoardReducer,
    showModal: showModal.reducer
  },
})