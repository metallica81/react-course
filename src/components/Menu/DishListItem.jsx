import { DishCounter } from "./DishCounter/DishCounter";
import styles from "./Menu.module.scss";
import { useSelector } from "react-redux";
import { selectDishById } from "../../Redux/Entities/Dish/slice";
import { Link } from "react-router";

export function DishListItem({ dishId }) {
    const dish = useSelector((state) => selectDishById(state, dishId));

    if (!dish) {
        return null
    }

    return (
        <li className={styles.root}>
            <Link to={`/dish/${dishId}`}>{dish.name}</Link>
        </li>
    );
}