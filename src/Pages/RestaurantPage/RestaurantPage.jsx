import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";
import { RestaurantData } from "../../components/Restaurant/RestaurantData";

export default function RestaurantPageWrapper({ children, restaurantId }) {

    if (restaurantId) {
        return (
            <>
                <RestaurantData key={restaurantId} id={restaurantId} />
                { children }
            </>
        );
    }
    
}
