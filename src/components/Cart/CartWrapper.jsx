import { CartContainer } from "./CartContainer";
import { getMenuById } from "../../Services/getMenuById";
import { use } from "react";
import { Suspense } from "react";

export const CartWrapper = () => {
    const menu = use(getMenuById());

    return (
        <Suspense fallback="loading...">
            <CartContainer menu={menu}/>
        </Suspense>
    )
};
