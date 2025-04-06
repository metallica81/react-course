import { useState, useEffect } from "react";

export const useRestaurantPage = (restaurantIds) => {
    
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

    useEffect(() => {
        if (restaurantIds.length > 0 && !activeRestaurantId) {
            setActiveRestaurantId(restaurantIds[0]);
        }
    }, [restaurantIds, activeRestaurantId]);

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
