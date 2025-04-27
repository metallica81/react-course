import { getRestaurantById } from "../../Services/getRestaurantById";
import { getReviewById } from "../../Services/getReviewById";
import { RestaurantContainer } from "./RestaurantContainer";

export const RestaurantData = async ({ id }) => {
    const restaurantData = await getRestaurantById(id);

    const reviews = await getReviewById(id);

    return (
        <RestaurantContainer restaurant={restaurantData} reviews={reviews} />
    );
};
