import { getRestaurantById } from "../../Services/getRestaurantById";
import { Suspense } from "react";
import { RestaurantContainer } from "./RestaurantContainer";
import { use } from "react";

export const RestaurantData = ({id}) => {
    const restaurantPromise = getRestaurantById(id);

    const restaurantData = use(restaurantPromise);
    
    return (
        <Suspense fallback='loading...'>
            <RestaurantContainer restaurant={restaurantData} id={id} />
        </Suspense>
    );
};
