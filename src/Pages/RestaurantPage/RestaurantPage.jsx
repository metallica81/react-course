import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";
import { useSelector } from "react-redux";
import { selectRestaurantById, selectRestaurantIds } from "../../Redux/Entities/Restaurant/slice";
import { useRequest } from "../../Redux/Hooks/useRequest";
import { getRestaurants } from "../../Redux/Entities/Restaurant/getRestaurant";

export function RestaurantPage() {
    const { restaurantId } = useParams();

    const requestStatus = useRequest(getRestaurants);
    console.log('requestStatus', requestStatus)

    const restaurantIds = useSelector(selectRestaurantIds);
    const restaurantInfo = useSelector((state) => selectRestaurantById(state, restaurantId));
    console.log('restaurantInfo', restaurantInfo)

    return (
        <>
            <RestaurantContainer key={restaurantId} id={restaurantId} />
            <Outlet context={{ restaurantId }} />
        </>
    );
}
