import { createSlice } from '@reduxjs/toolkit'


export const showModal = createSlice({
    name: 'modal',
    initialState: '',
    reducers: {
      isShowModal: (state, action) => {
          const {payload} = action;
        return payload;
      }
    },
  })

  export const {isShowModal} = showModal.actions;