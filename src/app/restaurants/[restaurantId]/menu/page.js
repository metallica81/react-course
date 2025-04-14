import { RestaurantMenuPage } from "../../../../Pages/RestaurantMenuPage/RestaurantMenuPage";

const MenuPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;
    return <RestaurantMenuPage restaurantId={restaurantId} />
}

export default MenuPageWrapper;