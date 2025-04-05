import styles from "./Pages.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../Redux/Entities/Restaurant/slice.js";
import { TabRestaurantContainer } from "../../components/TabRestorauntContainer/TabRestaurantContainer.jsx";
import { Outlet } from "react-router";
import { getRestaurants } from "../../Redux/Entities/Restaurant/getRestaurant.js";
import { useRequest } from "../../Redux/Hooks/useRequest.js";
import { useRestaurantPage } from "./useRestruantPage.js";

export const RestaurantsTabsPage = () => {
    const requestStatus = useRequest(getRestaurants);
    const restaurantIds = useSelector(selectRestaurantIds);

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
