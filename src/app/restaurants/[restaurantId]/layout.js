import RestaurantPageWrapper from "../../../components/Pages/RestaurantPage/RestaurantPage";
import { getRestaurants } from "../../../Services/getRestaurants";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
    const { restaurantId } = await params;

    const restaurants = await getRestaurants();

    const restaurant = restaurants.find(({ id }) => restaurantId === id);

    return {
        title: restaurant.name,
    };
};

const RestaurantLayout = async ({ children, params }) => {
    const { restaurantId } = await params;
    return (
        <Suspense fallback="loading restaurant">
            <RestaurantPageWrapper restaurantId={restaurantId}>
                {children}
            </RestaurantPageWrapper>
        </Suspense>
    );
};

export default RestaurantLayout;
