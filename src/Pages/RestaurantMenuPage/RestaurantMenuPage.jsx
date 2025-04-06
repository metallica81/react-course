import { DishListItem } from "../../components/Menu/DishListItem";
import { useOutletContext } from "react-router";
import { useGetMenuQuery } from "../../Redux/Services/api";

export function RestaurantMenuPage() {
    const { restaurantId } = useOutletContext();
    const {
        isError,
        isLoading,
        data: restaurantDishList,
    } = useGetMenuQuery(restaurantId);
    console.log("restaurantDishList", restaurantDishList);

    if (isLoading) {
        return "loading...";
    }

    if (isError) {
        return "error";
    }

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {restaurantDishList.map((dish) => (
                    <DishListItem
                        key={dish.id}
                        dishId={dish.id}
                        name={dish.name}
                    />
                ))}
            </ul>
        </>
    );
}
