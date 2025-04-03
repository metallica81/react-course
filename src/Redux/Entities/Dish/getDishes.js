import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishTotal } from "./slice";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/dishes");

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectDishTotal(getState());
    },
  }
);
