import { useSelector } from "react-redux";
import { Cart } from "./Cart";
import { selectDishIds } from "../../Redux/Entities/Dish/slice";

export function CartContainer() {
    const dishInCart = useSelector((state) => state.cartSlice.items || {});
    
    const dishIds = useSelector(selectDishIds);


    return (
        <Cart dishIds={dishIds} dishInCart={dishInCart}/>
    );
}