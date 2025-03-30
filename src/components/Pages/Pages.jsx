import { RestaurantContainer } from "../Restaurant/RestaurantContainer.jsx";
import { useRestaurantPage } from "./useRestruantPage.js";
import styles from "./Pages.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../Redux/Entities/Restaurant/slice.js";
import { TabRestaurantContainer } from "../TabRestorauntContainer/TabRestaurantContainer.jsx";

export const Pages = () => {
    const restaurantIds = useSelector(selectRestaurantIds);

    const { activeRestaurantId, handleChooseRestaurant } = useRestaurantPage(restaurantIds);

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

            {!!activeRestaurantId && (
                <RestaurantContainer
                    key={activeRestaurantId}
                    id={activeRestaurantId}
                />
            )}
        </div>
    );
};
