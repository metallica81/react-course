import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";

export function RestaurantPageWrapper({ children, restaurantId }) {

    if (restaurantId) {
        return (
            <>
                <RestaurantContainer key={restaurantId} id={restaurantId} />
                { children }
            </>
        );
    }
    
}
