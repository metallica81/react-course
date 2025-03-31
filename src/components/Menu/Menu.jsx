import { useParams } from "react-router";
import { DishListItem } from "./DishListItem";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";

export function Menu() {
    const { restaurantId } = useParams();

    const restaurantDishIds = useSelector((state) => selectRestaurantById(state, restaurantId));
    
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {restaurantDishIds.menu.map((dishId) => (
                    <DishListItem key={dishId} dishId={dishId} />
                ))}
            </ul>
        </>
    );
}
