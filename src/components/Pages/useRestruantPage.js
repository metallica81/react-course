import { useState } from "react";

export const useRestaurantPage = (restaurantIds) => {
    
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

    const handleChooseRestaurant = (id) => {
        if (activeRestaurantId === id) {
            return;
        }
        setActiveRestaurantId(id);
    };

    return {
        activeRestaurantId,
        handleChooseRestaurant,
    };
};
