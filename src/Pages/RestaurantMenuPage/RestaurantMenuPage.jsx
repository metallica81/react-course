"use client"

import { DishListItem } from "../../components/Menu/DishListItem";

export function RestaurantMenuPage({ restaurantDishList }) {
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
