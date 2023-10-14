import { configureStore } from '@reduxjs/toolkit'
import listSlice from './slices/listSlice';


// store configure   


 const store = configureStore({
  reducer: {
    list : listSlice
  },
})

export default store;