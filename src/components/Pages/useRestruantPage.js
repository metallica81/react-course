import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../Redux/Entities/Restaurant/slice.js";

export const useRestaurantPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds); 
    
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
