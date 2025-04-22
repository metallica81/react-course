"use client";

import styles from "./Pages.module.scss";
import useRestaurantPage from "../../../hooks/useRestruantPage.js";
import { TabNavLink } from "../../TabRestorauntContainer/TabNavLink.jsx";

const TabsUi = ({ restaurants }) => {
    const restaurantIds = restaurants?.map((restaurant) => restaurant.id);

    const { activeRestaurantId, handleChooseRestaurant } =
        useRestaurantPage(restaurantIds);

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                {restaurants?.map((restaurant) => (
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
        </div>
    );
};

export default TabsUi;