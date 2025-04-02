import { useRestaurantPage } from "./useRestruantPage.js";
import styles from "./Pages.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../Redux/Entities/Restaurant/slice.js";
import { TabRestaurantContainer } from "../../components/TabRestorauntContainer/TabRestaurantContainer.jsx";
import { Outlet } from "react-router";

export const RestaurantsTabsPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);

    const { activeRestaurantId, handleChooseRestaurant } =
        useRestaurantPage(restaurantIds);

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                {restaurantIds.map((id) => (
                    <TabRestaurantContainer
                        key={id}
                        id={id}
                        externalClassname={styles.settingsForButton}
                        onClick={() => handleChooseRestaurant(id)}
                        isActive={id === activeRestaurantId}
                    />
                ))}
            </nav>
            <Outlet />
        </div>
    );
};
