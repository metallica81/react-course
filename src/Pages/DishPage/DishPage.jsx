import { useParams } from "react-router";
import { Dish } from "../../components/Menu/Dish";

export function DishPage() {
    const { dishId } = useParams();

    return <Dish dishId={dishId} />;
}
