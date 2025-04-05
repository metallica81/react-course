import { createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getDish } from "./getDish";

export const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: "dishSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(
            getDishes.fulfilled,
            (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            },
            builder.addCase(getDish.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            })
        ),
});

export const { selectRequestStatus } = dishSlice.selectors;

const selectDishSlice = (state) => state.dishSlice;

export const {
    selectIds: selectDishIds,
    selectById: selectDishById,
    selectTotal: selectDishTotal,
} = entityAdapter.getSelectors(selectDishSlice);
