import { CartItemContainer } from "./CartItemContainer"

export function Cart({ dishIds }) {

    return(
        <ul>
            {dishIds.map((id) =>
                <CartItemContainer key={id} id={id} />
            )}
        </ul>
    )
}