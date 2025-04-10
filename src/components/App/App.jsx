import { Provider } from "react-redux";
import { store } from "../../Redux/store";
import { Layout } from "../Layout/Layout";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { UserContext } from "../UserContext/UserContext";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { RestaurantsTabsPage } from "../../Pages/RestaurantsTabsPage/RestaurantsTabsPage";
import { RestaurantPage } from "../../Pages/RestaurantPage/RestaurantPage";
import { Navigate } from "react-router";
import { RestaurantMenuPage } from "../../Pages/RestaurantMenuPage/RestaurantMenuPage";
import { RestaurantReviewsPage } from "../../Pages/RestaurantReviewsPage/RestaurantReviewsPage";
import { DishPage } from "../../Pages/DishPage/DishPage";
import "../../index.css";

export const App = () => {
    return (
        <Provider store={store}>
            <UserContext>
                <ThemeContext>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route
                                    index
                                    element={<HomePage />}
                                />
                                <Route
                                    path="/restaurants"
                                    element={<RestaurantsTabsPage />}
                                >
                                    <Route
                                        path=":restaurantId"
                                        element={<RestaurantPage />}
                                    >
                                        <Route
                                            index
                                            element={
                                                <Navigate to="menu" replace />
                                            }
                                        />
                                        <Route
                                            path="menu"
                                            element={<RestaurantMenuPage/>}
                                        />
                                        <Route
                                            path="reviews"
                                            element={<RestaurantReviewsPage />}
                                        />
                                    </Route>
                                </Route>
                                <Route
                                    path="dish/:dishId"
                                    element={<DishPage />}
                                />
                            </Route>
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </Routes>
                    </BrowserRouter>
                </ThemeContext>
            </UserContext>
        </Provider>
    );
};

export default App;
