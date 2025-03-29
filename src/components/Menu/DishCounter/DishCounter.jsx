import { Counter } from "../../Counter/Counter";
import { UserContext } from "../../UserContext";
import { use } from "react";
import { useDishCounter } from "./useDishCounter";

export function DishCounter({ dishId }) {
    const { isAuth } = use(UserContext);

    const { handleDecrement, count, handleIncrement } = useDishCounter(dishId);

    if (!isAuth) {
        return null;
    }

    return (
        <Counter
            onDecrement={handleDecrement}
            count={count}
            onIncrement={handleIncrement}
        />
    );
}
