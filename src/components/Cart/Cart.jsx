import { CartItemContainer } from "./CartItemContainer"

export function Cart({ dishIds, menu }) {

    return(
        <ul>
            {dishIds.map((id) =>
                <CartItemContainer key={id} id={id} menu={menu} />
            )}
        </ul>
    )
}