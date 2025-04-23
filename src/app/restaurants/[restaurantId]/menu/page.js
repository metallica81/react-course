import RestaurantMenuPage from "../../../../components/Pages/RestaurantMenuPage/RestaurantMenuPage";
import { getMenuById } from "../../../../Services/getMenuById";

const MenuPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;

    const dishMenu = await getMenuById(restaurantId);

    return <RestaurantMenuPage restaurantDishList={dishMenu} />;
};

export default MenuPageWrapper;
