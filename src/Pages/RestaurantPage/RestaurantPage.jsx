import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";

export function RestaurantPage() {
    const { restaurantId } = useParams();

    if (restaurantId) {
        return (
            <>
                <RestaurantContainer key={restaurantId} id={restaurantId} />
                <Outlet context={{ restaurantId }} />
            </>
        );
    }
    
}
