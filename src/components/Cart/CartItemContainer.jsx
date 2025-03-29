import { selectCountByItemId } from "../../Redux/Entities/Cart/slice";
import { selectDishById } from "../../Redux/Entities/Dish/slice";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem"

export function CartItemContainer({ id }) {
    const dish = useSelector((state) => selectDishById(state, id));

    const count = useSelector((state) => selectCountByItemId(state, id));

    return <CartItem id={id} count={count} name={dish.name} />;
}
