import { addToCart, removeFromCart } from "../../../Redux/Entities/Cart/slice";
import { useDispatch, useSelector } from "react-redux";


export const useDishCounter = (dishId) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.cartSlice.items?.[dishId] || 0);

    const handleIncrement = () => {
        if (count < 5) {
            dispatch(addToCart({ productId: dishId }));
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            dispatch(removeFromCart({ productId: dishId }));
        }
    };

    return {handleDecrement, count, handleIncrement}
}