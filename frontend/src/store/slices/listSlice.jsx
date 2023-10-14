
// list slice 

import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  tasks:[]

};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {

    // reducer function for add fush object in array 
    add:  (state,action) => {
         
      state.tasks = [...state.tasks , action.payload];
    },

    // reducer update status in arrray  
    update: (state, action) => {
      
      state.tasks = state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, status: task.status === 0 ? 1 : 0 }
            : task
        )


    }
  },
})

// Action creators are generated for each case reducer function
export const { add , update } = listSlice.actions

export default listSlice.reducer