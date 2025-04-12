"use client"

import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";

export function RestaurantPage({ children, restaurantId }) {

    if (restaurantId) {
        return (
            <>
                <RestaurantContainer key={restaurantId} id={restaurantId} />
                { children }
            </>
        );
    }
    
}
