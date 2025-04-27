import { CartContainer } from "./CartContainer";
import { getMenuById } from "../../Services/getMenuById";
import { use } from "react";

export const CartWrapper = () => {
    const menu = use(getMenuById());

    return <CartContainer menu={menu} />;
};
