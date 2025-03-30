import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";
import { CommonButton } from "../CommonButton/CommonButton";
import { NavLink } from "react-router";

export const TabRestaurantContainer = ({ id, externalClassname, onClick, isActive }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <NavLink to={id}>
            <CommonButton
                key={id}
                sizeVariant="navSelectorSize"
                colorVariant="navSelectorColor"
                isActive={isActive}
                onClick={onClick}
                externalClassname={externalClassname}
            >
                {name}
            </CommonButton>
        </NavLink>
    );
};
