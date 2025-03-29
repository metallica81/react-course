import { selectDishById } from "../../Redux/Entities/Dish/slice";
import { useSelector } from "react-redux";

export function Cart({ dishIds, dishInCart}) {
    const dishes = useSelector((state) =>
        dishIds.map((dishId) => selectDishById(state, dishId))
    );

    return(
        <ul>
            {!!dishes && dishes.map((dish) =>
                dish && dishInCart[dish.id] ? (
                    <li key={dish.id}>
                        {dish.name} — {dishInCart[dish.id]} шт.
                    </li>
                ) : null
            )}
        </ul>
    )
}