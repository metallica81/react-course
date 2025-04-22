import { getRestaurants } from "../../../Services/getRestaurants.js";
import TabsUi from "./TabsUi.jsx";

export default async function RestaurantsTabsPage() {
    const restaurants = await getRestaurants();

    return <TabsUi restaurants={restaurants} />;
}
