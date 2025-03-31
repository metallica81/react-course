import { useParams } from "react-router";
import { Dish } from "./Dish";

export function DishPage() {
    const { dishId } = useParams();
    
    return (
        <Dish dishId={dishId} />
    )
}