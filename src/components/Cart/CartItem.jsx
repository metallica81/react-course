export function CartItem({ id, name, count }) {
    return (
        <li key={id}>
            {name} — {count} шт.
        </li>
    );
}
