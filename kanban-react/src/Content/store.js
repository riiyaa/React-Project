import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './board/boardSlice';

export default configureStore({
  reducer: {
    boards: BoardReducer,
  },
})