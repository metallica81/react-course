import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";
import { Restaurant } from "./Restaurant";

export const RestaurantContainer = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    
    if (!restaurant) {
        return null;
    }

    const { name, menu, reviews } = restaurant;

    return (
        <Restaurant name={name} menu={menu} reviews={reviews} />
    );
};
