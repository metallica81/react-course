import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./getReviews";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: "reviewSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getReviews.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        }),
});

export const { selectRequestStatus } = reviewSlice.selectors;

const selectreviewSlice = (state) => state.reviewSlice;

export const {
    selectIds: selectReviewIds,
    selectById: selectReviewById,
    selectTotal: selectReviewTotal,
} = entityAdapter.getSelectors(selectreviewSlice);
