import { RestaurantMenuPage } from "../../../../Pages/RestaurantMenuPage/RestaurantMenuPage";
import { getMenuById } from "../../../../Services/getMenuById";
import { Suspense } from "react";

const MenuPageWrapper = async ({ params }) => {
    const { restaurantId } = await params;

    const dishMenuPromise = getMenuById(restaurantId);
    const dishMenu = await dishMenuPromise;

    return (
        <Suspense fallback='loading...'>
            <RestaurantMenuPage restaurantDishList={dishMenu} />
        </Suspense>
    )
}

export default MenuPageWrapper;