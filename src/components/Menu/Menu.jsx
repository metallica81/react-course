import { DishCounter } from "./DishCounter/DishCounter";

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
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                }}
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
