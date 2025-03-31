import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../Restaurant/RestaurantContainer";

export function RestaurantPage() {
    const { restaurantId } = useParams();

    return (
        <>
            <RestaurantContainer key={restaurantId} id={restaurantId} />
            <Outlet />
        </>
    );
}
