import { getRestaurantById } from "../../Services/getRestaurantById";
import { getReviewById } from "../../Services/getReviewById";
import { Suspense } from "react";
import { RestaurantContainer } from "./RestaurantContainer";
import { use } from "react";

export const RestaurantData = ({ id }) => {
    const restaurantPromise = getRestaurantById(id);

    const restaurantData = use(restaurantPromise);

    const reviewPromise = getReviewById(id);
    const reviews = use(reviewPromise);

    
    return (
        <Suspense fallback='loading...'>
            <RestaurantContainer restaurant={restaurantData} id={id} reviews={reviews} />
        </Suspense>
    );
};
