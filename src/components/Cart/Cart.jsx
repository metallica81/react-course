export function Cart({ dishes, dishInCart}) {
    return(
        <ul>
            {dishes.map((dish) =>
                dish ? (
                    <li key={dish.id}>
                        {dish.name} — {dishInCart[dish.id]} шт.
                    </li>
                ) : null
            )}
        </ul>
    )
}