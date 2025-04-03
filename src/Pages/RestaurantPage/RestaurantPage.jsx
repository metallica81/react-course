import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";
import { useRequest } from "../../Redux/Hooks/useRequest";
import { useSelector } from "react-redux";
import { getRestaurants } from "../../Redux/Entities/Restaurant/getRestaurant";
import { selectRestaurantIds } from "../../Redux/Entities/Restaurant/slice";
import { useRestaurantPage } from "../RestaurantsTabsPage/useRestruantPage";

export function RestaurantPage() {
    const { restaurantId } = useParams();

    const requestStatus = useRequest(getRestaurants);

    const restaurantIds = useSelector(selectRestaurantIds);

    const { activeRestaurantId, handleChooseRestaurant } =
        useRestaurantPage(restaurantIds);

    if (requestStatus === "idle" || requestStatus === "pending") {
        return "loading...";
    }

    if (requestStatus === "rejected") {
        return "error";
    }

    return (
        <>
            <RestaurantContainer key={restaurantId} id={restaurantId} />
            <Outlet context={{ restaurantId }} />
        </>
    );
}
