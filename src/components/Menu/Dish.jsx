import { DishCounter } from "./DishCounter/DishCounter";
import styles from "./Menu.module.scss";
import { useGetDishByIdQuery } from "../../Redux/Services/api";

export function Dish({ dishId }) {
    const { isError, isLoading, data: dish } = useGetDishByIdQuery(dishId);
    console.log(useGetDishByIdQuery(dishId));
    if (isError) {
        return "error";
    }
    
    if (isLoading) {
        return "loading";
    }

    if (dish.name) {
        return (
            <div className={styles.dishCounterDiv}>
                <p>{dish.name}</p>
                <DishCounter dishId={dishId} />
            </div>
        );
    }
}
