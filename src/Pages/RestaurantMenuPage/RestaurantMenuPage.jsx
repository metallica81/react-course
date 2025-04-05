import { DishListItem } from "../../components/Menu/DishListItem";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";
import { IDLE, PENDING, REJECTED } from "../../Redux/consts";
import { useRequest } from "../../Redux/Hooks/useRequest";
import { getDishes } from "../../Redux/Entities/Dish/getDishes";

export function RestaurantMenuPage() {
    const { restaurantId } = useOutletContext();
    const requestStatus = useRequest(getDishes, restaurantId);
    const restaurantDishIds = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...';
      }
    
      if (requestStatus === REJECTED) {
        return 'error';
      }

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
