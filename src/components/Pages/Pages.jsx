import { restaurants } from "../../mock.js";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { SelectButton } from "../SelectButton/SelectButton.jsx";
import { useRestaurantPage } from "./useRestruantPage.js";
import styles from "./Pages.module.scss";

export const Pages = () => {
    const { restaurant, handleChooseRestaurant } = useRestaurantPage();

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                {restaurants.map(({ id, name }) => (
                    <SelectButton
                        key={id}
                        isActive={id === restaurant.id}
                        onClick={() => handleChooseRestaurant(id)}
                        className={styles.settingsForButton}
                    >
                        {name}
                    </SelectButton>
                ))}
            </nav>

            {!!restaurant && <Restaurant restaurant={restaurant} />}
        </div>
    );
};
