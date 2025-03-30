import { DishListItem } from "./DishListItem";

export function Menu({ menu }) {

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((dishId) => (
                    <DishListItem key={dishId} dishId={dishId} />
                ))}
            </ul>
        </>
    );
}
