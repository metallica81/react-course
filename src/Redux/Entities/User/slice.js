import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

export const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: "userSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        }),
});

export const { selectRequestStatus } = userSlice.selectors;

const selectUsersSlice = (state) => state.users;

export const { selectById: selectUserById, selectTotal: selectUsersTotal } =
    entityAdapter.getSelectors(selectUsersSlice);
