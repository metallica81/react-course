import { getRestaurants } from "../../Services/getRestaurants.js";
import { use } from "react";
import { TabsUi } from "./TabsUi.jsx";
import { Suspense } from "react";

export const RestaurantsTabsPage = () => {
    const restaurantsPromise = getRestaurants();
    
    const restaurants = use(restaurantsPromise).map(restaurant => restaurant.name);
    console.log(restaurants)

    return (
        <Suspense fallback='loading...'>
            <TabsUi restaurants={restaurants} />
        </Suspense>
    )
};
