import { restaurants } from "../../mock.js";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { CommonButton } from "../CommonButton/CommonButton.jsx";
import { useRestaurantPage } from "./useRestruantPage.js";
import styles from "./Pages.module.scss";

export const Pages = () => {
    const { restaurant, handleChooseRestaurant } = useRestaurantPage();

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                {restaurants.map(({ id, name }) => (
                    <CommonButton
                        key={id}
                        sizeVariant="navSelectorSize"
                        colorVariant="navSelectorColor"
                        isActive={id === restaurant.id}
                        onClick={() => handleChooseRestaurant(id)}
                        externalClassname={styles.settingsForButton}
                    >
                        {name}
                    </CommonButton>
                ))}
            </nav>

            {!!restaurant && <Restaurant restaurant={restaurant} />}
        </div>
    );
};
