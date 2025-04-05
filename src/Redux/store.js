import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./Entities/Restaurant/slice";
import { userSlice } from "./Entities/User/slice";
import { reviewSlice } from "./Entities/Review/slice";
import { dishSlice } from "./Entities/Dish/slice";
import { cartSlice } from "./Entities/Cart/slice";
import { requestSlice } from "./entities/request/slice";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action);

    return next(action);
};

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});
