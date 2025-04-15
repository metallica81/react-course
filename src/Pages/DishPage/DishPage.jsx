import { Dish } from "../../components/Menu/Dish";
import { getDishById } from "../../Services/getDishById";
import { use } from "react";
import { Suspense } from "react";

export function DishPage({dishId}) {
    const dish = use(getDishById(dishId))

    return (
        <Suspense fallback="loading...">
            <Dish dishId={dishId} dish={dish} />
        </Suspense>
    )
}
