import { DishCounter } from "./DishCounter/DishCounter";
import styles from "./Menu.module.scss";

export function Menu({ menu }) {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((menu) => {
                    return (
                        Boolean(menu.name) && (
                            <li
                                key={menu.id}
                                className={styles.root}
                            >
                                {menu.name}
                                <DishCounter id={menu.id} />
                            </li>
                        )
                    );
                })}
            </ul>
        </>
    );
}
