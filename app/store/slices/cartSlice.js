import { sampleCart } from "@/data/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart : sampleCart,
  totalQuantity: 1, 
  totalAmount: 0, 
  isCartOpen: false 
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart : (state , action) => {
      const existingId = action.payload.id;
      const cartItem = state.cart.find(item => item.id === existingId);
      if(cartItem){
        cartItem.quantity +=1;
        
      }else{
      state.cart.push(action.payload);

      }
    },
    removeItem : (state , action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
    increment: (state  , action) =>{
      const id  = action.payload;  
      const existingItem = state.cart.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }
      
    },
    decrement : (state , action )=>{
      const id = action.payload;
      const existingItem = state.cart.find(item => item.id ===id);
      if(existingItem && existingItem.quantity > 1){
        existingItem.quantity -= 1;
      }
      else if (existingItem && existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id != id);
        state.totalQuantity -= 1;
        state.totalAmount += existingItem.price;
        
      }

    },
  },
});

export const { addToCart , removeItem , increment ,decrement } = cartSlice.actions;

export default cartSlice.reducer;
