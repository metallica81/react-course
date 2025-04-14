import { RestaurantPageWrapper } from "../../../Pages/RestaurantPage/RestaurantPage";

const RestaurantLayout = async ({ children, params }) => {
    const { restaurantId } = await params;
    return (
        <RestaurantPageWrapper restaurantId={restaurantId}>{children}</RestaurantPageWrapper>
    );
};

export default RestaurantLayout;
