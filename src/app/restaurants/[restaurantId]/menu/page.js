import { RestaurantMenuPage } from "../../../../Pages/RestaurantMenuPage/RestaurantMenuPage";
import { getMenuById } from "../../../../Services/getMenuById";
import { Suspense } from "react";

const MenuPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;

    const dishMenu = await getMenuById(restaurantId);

    return (
        <Suspense fallback='loading...'>
            <RestaurantMenuPage restaurantDishList={dishMenu} />
        </Suspense>
    )
}

export default MenuPageWrapper;