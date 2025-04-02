import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";
import { Restaurant } from "./Restaurant";
import styles from "./RestaurantContainer.module.scss";

export const RestaurantContainer = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    
    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <Restaurant name={name} externalClassname={styles.externalClassname} />
    );
};
