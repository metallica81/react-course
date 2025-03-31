import { useSelector } from "react-redux"
import { selectDishById } from "../../Redux/Entities/Dish/slice"
import { DishCounter } from "./DishCounter/DishCounter";

export function Dish({ dishId }) {
    
    const { name } = useSelector((state) => selectDishById(state, dishId))

    return (
        <div style={{ margin: "10px" }}>
            <p>{name}</p>
            <DishCounter dishId={dishId} />
        </div>
    )
}