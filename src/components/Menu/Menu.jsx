import { DishCounter } from "./DishCounter/DishCounter";
import styles from "./Menu.module.scss";

export function Menu({ menu }) {

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((menu) => {
                    return (
                        Boolean(menu) && (
                            <li
                                key={menu}
                                className={styles.root}
                            >
                                {menu}
                                <DishCounter id={menu} />
                            </li>
                        )
                    );
                })}
            </ul>
        </>
    );
}
