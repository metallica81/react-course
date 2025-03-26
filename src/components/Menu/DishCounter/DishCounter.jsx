import { Counter } from "../../Counter/Counter";
import { UserContext } from "../../UserContext";
import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../Redux/Entities/Cart/slice";

export function DishCounter({ dishId }) {
    const { isAuth } = use(UserContext);
    const dispatch = useDispatch();
    console.log(dishId)
    const count = useSelector((state) => state.cartSlice.items?.[dishId] || 0);

    if (!isAuth) {
        return null;
    }

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

    return (
        <Counter
            onDecrement={handleDecrement}
            count={count}
            onIncrement={handleIncrement}
        />
    );
}
