import { selectCountByItemId } from "../../Redux/Entities/Cart/slice";
import { useSelector } from "react-redux";
import { CartListItem } from "./CartListItem"

export function CartItemContainer({ id, menu }) {
    const dish = menu.find(item => item.id === id)
    
    const count = useSelector((state) => selectCountByItemId(state, id));

    return <CartListItem count={count} name={dish.name} />;
}
