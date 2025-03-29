import { useCallback } from "react";
import {
    addToCart,
    removeFromCart,
    selectCountByItemId,
} from "../../../Redux/Entities/Cart/slice";
import { useDispatch, useSelector } from "react-redux";

export const useDishCounter = (dishId) => {
    const dispatch = useDispatch();
    const count =
        useSelector((state) => selectCountByItemId(state, dishId)) || 0;

    const handleIncrement = useCallback(() => {
        if (count < 5) {
            dispatch(addToCart(dishId));
        }
    }, [dispatch, dishId, count]);

    const handleDecrement = useCallback(() => {
        if (count > 0) {
            dispatch(removeFromCart(dishId));
        }
    }, [dispatch, dishId, count]);

    return { handleDecrement, count, handleIncrement };
};
