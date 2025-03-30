import { Provider } from "react-redux";
import { store } from "../../Redux/store";
import { Layout } from "../Layout/Layout";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { UserContext } from "../UserContext/UserContext";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../Pages/HomePage";
import { RestaurantsPages } from "../Pages/RestaurantPages";
import { RestaurantPage } from "../Pages/RestaurantPage";

export const App = () => {
    return (
        <Provider store={store}>
            <UserContext>
                <ThemeContext>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route path="/restaurants" element={<RestaurantsPages />} >
                                    <Route path=':restaurantId' element={<RestaurantPage />} />
                                </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeContext>
            </UserContext>
        </Provider>
    );
};
