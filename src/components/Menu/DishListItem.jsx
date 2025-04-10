import styles from "./Menu.module.scss";
import { Link } from "react-router";

export function DishListItem({ name, dishId }) {

    if (!dishId) {
        return null
    }

    return (
        <li className={styles.root}>
            <Link to={`/dish/${dishId}`}>{name}</Link>
        </li>
    );
}