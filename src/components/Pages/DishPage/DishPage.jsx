import { Dish } from "../../../components/Menu/Dish";
import { getDishById } from "../../../Services/getDishById";

export default async function DishPage({ dishId }) {
    const dish = await getDishById(dishId);

    return <Dish dishId={dishId} dish={dish} />;
}
