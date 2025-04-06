import { selectCountByItemId } from "../../Redux/Entities/Cart/slice";
import { useSelector } from "react-redux";
import { CartListItem } from "./CartListItem"
import { useGetDishByIdQuery } from "../../Redux/Services/api";

export function CartItemContainer({ id }) {
    const { isError, isLoading, data: dish} = useGetDishByIdQuery(id);

    const count = useSelector((state) => selectCountByItemId(state, id));

    if (isError) {
        return "error";
    }

    if (isLoading) {
        return "loading";
    }

    return <CartListItem count={count} name={dish.name} />;
}
