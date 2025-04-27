import RestaurantsTabsPage from "../../components/Pages/RestaurantsTabsPage/RestaurantsTabsPage";
const RestaurantsPageWrapper = ({ children }) => {
    return (
        <>
            <RestaurantsTabsPage />
            {children}
        </>
    );
};

export default RestaurantsPageWrapper;
