import { DishCounter } from "./DishCounter/DishCounter";
import styles from "./Menu.module.scss";

export function Dish({ dishId, dish }) {
    if (!dish.name) {
        return;
    }

    if (dish.name) {
        return (
            <div className={styles.dishCounterDiv}>
                <p>{dish?.name}</p>
                <DishCounter dishId={dishId} />
            </div>
        );
    }
}
