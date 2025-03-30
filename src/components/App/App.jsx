import { Provider } from "react-redux";
import { store } from "../../Redux/store";
import { Layout } from "../Layout/Layout";
import { Pages } from "../Pages/Pages";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { UserContext } from "../UserContext/UserContext";
import { BrowserRouter, Route, Routes } from "react-router";

export const App = () => {
    return (
        <Provider store={store}>
            <UserContext>
                <ThemeContext>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route index element={<Pages />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeContext>
            </UserContext>
        </Provider>
    );
};
