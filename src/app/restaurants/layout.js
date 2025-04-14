import { RestaurantsTabsPage } from "../../Pages/RestaurantsTabsPage/RestaurantsTabsPage";
const RestaurantsPageWrapper = ({ children }) => {
    return (
        <>
            <RestaurantsTabsPage />
            {children}
        </>
    );
};

export default RestaurantsPageWrapper;
