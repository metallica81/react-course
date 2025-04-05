import { useSelector } from "react-redux"
import { selectDishById } from "../../Redux/Entities/Dish/slice"
import { DishCounter } from "./DishCounter/DishCounter";
import { useRequest } from "../../Redux/Hooks/useRequest";
import { getDish } from "../../Redux/Entities/Dish/getDish";
import { IDLE, PENDING, REJECTED } from "../../Redux/consts";
import styles from "./Menu.module.scss";

export function Dish({ dishId }) {
    const requestStatus = useRequest(getDish, dishId);
    const { name } = useSelector((state) => selectDishById(state, dishId))
    if (name) {
        return (
            <div className={styles.dishCounterDiv}>
                <p>{name}</p>
                <DishCounter dishId={dishId} />
            </div>
        )
    }
    

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...';
      }
    
      if (requestStatus === REJECTED) {
        return 'error';
      }
}