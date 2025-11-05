import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Everyday Tote Bag",
    price: 49,
    image: "/images/purse.png",
    quantity: 2,
    color: "Dark Gray",
    size: "Medium",
  },
  {
    id: 2,
    name: "Premium Runner Shoes",
    price: 89,
    image: "/images/shoes.png",
    quantity: 1,
    color: "Black",
    size: "42",
  },
  {
    id: 3,
    name: "Commuter Backpack Pro",
    price: 129,
    image: "/images/newbag.png",
    quantity: 1,
    color: "Navy Blue",
    size: "Large",
  },
  {
    id: 4,
    name: "Leather Sling Pouch",
    price: 29,
    image: "/images/pouch.png",
    quantity: 3,
    color: "Brown",
    size: "Small",
  },
  {
    id: 5,
    name: "Urban Hoodie Classic",
    price: 69,
    image: "/images/jacket.png",
    quantity: 1,
    color: "Charcoal",
    size: "Large",
  },
];

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart : (state) => {

    }
  },
});

export const { } = CartSlice.actions;

export default CartSlice.reducer;
[]