"use client"

import { DishListItem } from "../../components/Menu/DishListItem";
import { useGetMenuQuery } from "../../Redux/Services/api";

export function RestaurantMenuPage({restaurantId}) {
    const {
        isError,
        isLoading,
        data: restaurantDishList,
    } = useGetMenuQuery(restaurantId);

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
