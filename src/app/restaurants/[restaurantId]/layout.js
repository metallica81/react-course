import { RestaurantPage } from "../../../Pages/RestaurantPage/RestaurantPage";

const RestaurantLayout = async ({ children, params }) => {
    const { restaurantId } = await params;
    return (
      <RestaurantPage restaurantId={restaurantId}>{children}</RestaurantPage>
    );
  };
  
  export default RestaurantLayout;