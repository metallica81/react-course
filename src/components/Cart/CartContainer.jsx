"use client"

import { useSelector } from "react-redux";
import { Cart } from "./Cart";
import { selectCartItemsIds } from "../../Redux/Entities/Cart/slice";

export function CartContainer({ menu }) {
    const itemsIds = useSelector(selectCartItemsIds);

    if (!itemsIds.length) {
        return null;
    }

    return (
        <Cart dishIds={itemsIds} menu={menu}/>
    );
}