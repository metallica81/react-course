import { Dish } from "../../components/Menu/Dish";
import { getDishById } from "../../Services/getDishById";
import { use } from "react";

export function DishPage({dishId}) {
    const dish = use(getDishById(dishId))
    
    return <Dish dishId={dishId} dish={dish} />;
}
