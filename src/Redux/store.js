import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./Entities/Restaurant/slice";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
    },
})