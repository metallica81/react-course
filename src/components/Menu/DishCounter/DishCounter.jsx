import { Counter } from "../../Counter/Counter";
import { useCounter } from "../../Counter/useCounter";
import { UserContext } from "../../UserContext";
import { use } from "react";

export function DishCounter() {
    const { isAuth } = use(UserContext);
    const {increment, count, decrement} = useCounter();
    return isAuth === null ? null : (
        <Counter onDecrement={decrement} count={count} onIncrement={increment} isAuthorized={isAuth} />
    );
}