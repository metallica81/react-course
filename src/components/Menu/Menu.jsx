import { DishCounter } from "./DishCounter/DishCounter";
import styles from "./Menu.module.scss";
import { selectDishById } from "../../Redux/Entities/Dish/slice";
import { useSelector } from "react-redux";

export function Menu({ menu }) {

    const dishes = useSelector((state) =>
        menu.map((dishId) => selectDishById(state, dishId))
    );

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {dishes.map((menu) => {
                    return (
                        Boolean(menu.name) && (
                            <li
                                key={menu.name}
                                className={styles.root}
                            >
                                {menu.name}
                                <DishCounter dishId={menu.id} />
                            </li>
                        )
                    );
                })}
            </ul>
        </>
    );
}
