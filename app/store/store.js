import { configureStore } from '@reduxjs/toolkit'
import  addToCartReducer  from './Slice/addToCartSlice'

export const store = configureStore({
  reducer: {
   cart : addToCartReducer,
  },
})                                                                            