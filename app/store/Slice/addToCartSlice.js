import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const addToCartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  },
})

export const { } = addToCartSlice.actions

export default addToCartSlice.reducer