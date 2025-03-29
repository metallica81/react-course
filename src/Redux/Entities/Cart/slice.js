import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {}
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { productId } = action.payload;
            state.items[productId] = (state.items[productId] || 0) + 1;
        },
        removeFromCart: (state, action) => {
            const { productId } = action.payload;
            if (!state.items[productId]) {
                return null;
            }
            state.items[productId]--;
            if (state.items[productId] === 0) {
                delete state.items[productId];
            }
            
        },
        clearCart: (state) => {
            state.items = {};
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
