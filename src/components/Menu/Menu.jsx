import { Dish } from "./Dish";

export function Menu({ menu }) {

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((dishId) => (
                    <Dish key={dishId} dishId={dishId} />
                ))}
            </ul>
        </>
    );
}
