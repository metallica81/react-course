import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurant";

export const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: "restaurantSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        }),
});

export const { selectRequestStatus } = restaurantSlice.selectors;

const selectRestaurantSlice = (state) => state.restaurantSlice;

export const {
    selectIds: selectRestaurantIds,
    selectById: selectRestaurantById,
    selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantSlice);
