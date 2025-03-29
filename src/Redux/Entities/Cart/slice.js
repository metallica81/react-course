import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {},
    reducers: {
        addToCart: (state, { payload }) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeFromCart: (state, { payload }) => {
            if (!state[payload]) {
                return state;
            }

            state[payload] = state[payload] - 1;

            if (state[payload] <= 0) {
                delete state[payload];
            }
        },
    },
    selectors: {
        selectCountByItemId: (state, id) => state[id],
        selectCartItemsIds: (state) => Object.keys(state),
    },
});

export const { selectCountByItemId, selectCartItemsIds } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;
