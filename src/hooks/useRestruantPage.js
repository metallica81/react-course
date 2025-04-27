import { useState, useEffect } from "react";

const useRestaurantPage = (restaurantIds) => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        Array.isArray(restaurantIds) && restaurantIds.length > 0
            ? restaurantIds[0]
            : null
    );

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

export default useRestaurantPage;