import { DishListItem } from "../../components/Menu/DishListItem";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";

export function RestaurantMenuPage() {
    const { restaurantId } = useOutletContext();

    const restaurantDishIds = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

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
