import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";
import { useSelector } from "react-redux";
import { selectRestaurantById, selectRestaurantIds } from "../../Redux/Entities/Restaurant/slice";
import { useRequest } from "../../Redux/Hooks/useRequest";
import { getRestaurants } from "../../Redux/Entities/Restaurant/getRestaurant";

export function RestaurantPage() {
    const { restaurantId } = useParams();

    const requestStatus = useRequest(getRestaurants, restaurantId);

    const restaurantIds = useSelector(selectRestaurantIds);

    if (restaurantIds) {
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
