import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../Redux/Entities/Restaurant/slice";
import { TabNavLink } from "./TabNavLink";

export const TabRestaurantContainer = ({ id, externalClassname, isActive }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const { name } = restaurant;

    return (
        <TabNavLink
            isActive={isActive}
            externalClassname={externalClassname}
            to={id}
        >
            {name}
        </TabNavLink>
    );
};
