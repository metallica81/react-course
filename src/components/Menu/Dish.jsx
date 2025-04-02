import { useSelector } from "react-redux"
import { selectDishById } from "../../Redux/Entities/Dish/slice"
import { DishCounter } from "./DishCounter/DishCounter";
import styles from "./Menu.module.scss";

export function Dish({ dishId }) {
    
    const { name } = useSelector((state) => selectDishById(state, dishId))

    return (
        <div className={styles.dishCounterDiv}>
            <p>{name}</p>
            <DishCounter dishId={dishId} />
        </div>
    )
}