import { restaurants } from "../../mock.js";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { Button } from "../Button/Button.jsx";
import { useRestaurantPage } from "./useRestruantPage.js";
import styles from "./Pages.module.scss";

export const Pages = () => {
    const { restaurant, handleChooseRestaurant } = useRestaurantPage();

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                {restaurants.map(({ id, name }) => (
                    <Button
                        key={id}
                        isActive={id === restaurant.id}
                        onClick={() => handleChooseRestaurant(id)}
                    >
                        {name}
                    </Button>
                ))}
            </nav>

            {!!restaurant && <Restaurant restaurant={restaurant} />}
        </div>
    );
};
