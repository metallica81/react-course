import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";
import { CommonButton } from "../CommonButton/CommonButton";

export const TabRestorauntContainer = ({ id, externalClassname, onClick, isActive }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
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
    );
};
