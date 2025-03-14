import { useState } from "react";
import { restaurants } from "../../mock";

export const useRestaurantPage = () => {
    const [restaurant, setRestaurant] = useState(restaurants[0]);

    const handleChooseRestaurant = (id) => {
        const viewRestorant = restaurants.find(
            (restaurant) => restaurant.id === id
        );
        setRestaurant(viewRestorant);
    };

    return {
        restaurant,
        handleChooseRestaurant,
    };
};
