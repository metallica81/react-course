import { restaurants } from "../../mock.js";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { Button } from "../Button/Button.jsx";
import { useRestaurantPage } from "./useRestruantPage.js";

export const Pages = () => {
    const { restaurant, handleChooseRestaurant } = useRestaurantPage();

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <nav
                style={{
                    display: "flex",
                    gap: "20px"
                }}
            >
                {restaurants.map(({ id, name }) => (
                    <Button
                        key={id}
                        isActive={id === restaurant.id}
                        onClick={() => handleChooseRestaurant(id)}
                        text={name}
                    />
                ))}
            </nav>

            {!!restaurant && <Restaurant restaurant={restaurant} />}
        </div>
    );
};
