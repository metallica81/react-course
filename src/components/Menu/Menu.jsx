import { Counter } from "../Counter/Counter"

export function Menu({menu}) {
    return(
        <>
            <h3>Меню</h3>
            <ul>
                {
                    menu.map((menu) => {
                        return (
                                Boolean(menu.name) && <li key={menu.id}  style={{display: "flex", gap: "10px", alignItems: "center" }}>
                                    {menu.name}
                                    <Counter id={menu.id}/>
                                </li>
                        )
                    })
                }
            </ul>
        </>
    )
}