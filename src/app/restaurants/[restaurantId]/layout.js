import { RestaurantPageWrapper } from "../../../Pages/RestaurantPage/RestaurantPage";
import { getRestaurants } from "../../../Services/getRestaurants";

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
        <RestaurantPageWrapper restaurantId={restaurantId}>{children}</RestaurantPageWrapper>
    );
};

export default RestaurantLayout;
