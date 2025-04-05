import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";
import { useRequest } from "../../Redux/Hooks/useRequest";
import { getRestaurants } from "../../Redux/Entities/Restaurant/getRestaurant";

export function RestaurantPage() {
    const { restaurantId } = useParams();

    const requestStatus = useRequest(getRestaurants, restaurantId);

    if (restaurantId) {
        return (
            <>
                <RestaurantContainer key={restaurantId} id={restaurantId} />
                <Outlet context={{ restaurantId }} />
            </>
        );
    }
    
    if (requestStatus === "idle" || requestStatus === "pending") {
        return "loading...";
    }

    if (requestStatus === "rejected") {
        return "error";
    }
}
