import { useParams } from "react-router";
import { RestaurantContainer } from "../Restaurant/RestaurantContainer";

export function RestaurantPage() {
    const { restaurantId } = useParams();
    console.log(restaurantId)

    return <RestaurantContainer key={restaurantId} id={restaurantId} />;
}
