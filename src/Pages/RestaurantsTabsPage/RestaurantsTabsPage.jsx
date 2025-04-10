"use client";

import styles from "./Pages.module.scss";
import { Outlet } from "react-router";
import { useRestaurantPage } from "./useRestruantPage.js";
import { useGetRestaurantsQuery } from "../../Redux/Services/api.js";
import { TabNavLink } from "../../components/TabRestorauntContainer/TabNavLink.jsx";

export const RestaurantsTabsPage = () => {
    const { status: requestStatus, data: restaurants = [] } = useGetRestaurantsQuery();
    const restaurantIds = restaurants?.map(restaurant => restaurant.id);

    const { activeRestaurantId, handleChooseRestaurant } =
        useRestaurantPage(restaurantIds);

    if (requestStatus === "idle" || requestStatus === "pending") {
        return "loading...";
    }

    if (requestStatus === "rejected") {
        return "error";
    }

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                {restaurants.map((restaurant) => (
                    <TabNavLink
                        to={restaurant.id}
                        key={restaurant.id}
                        id={restaurant.id}
                        externalClassname={styles.settingsForButton}
                        onClick={() => handleChooseRestaurant(restaurant.id)}
                        isActive={restaurant.id === activeRestaurantId}
                    >
                        {restaurant.name}
                    </TabNavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
};
