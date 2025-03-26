import { useSelector } from "react-redux";
import { selectDishById } from "../../Redux/Entities/Dish/slice";
import { Cart } from "./Cart";

export function CartContainer() {
    const dishInCart = useSelector((state) => state.cartSlice.items || {});

    const dishes = useSelector((state) =>
        Object.keys(dishInCart).map((dishId) => selectDishById(state, dishId))
    );

    return (
        <Cart dishes={dishes} dishInCart={dishInCart}/>
    );
}
