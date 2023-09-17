import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartList = [...state.cartList, action.payload];
        },
        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(
                (item) => item.id !== action.payload.id
            );
        },
        adjustItem: (state, action) => {
            const adjustedItem = state.cartList.findIndex(item => item.id === action.payload.id)
            state.cartList[adjustedItem] = action.payload
        }
    },
});

export const { cartList, addToCart, removeFromCart } = cart.actions;

export default cart.reducer;
