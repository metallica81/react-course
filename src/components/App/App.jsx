import { Provider } from "react-redux";
import { store } from "../../Redux/store";
import { Layout } from "../Layout/Layout";
import { Pages } from "../Pages/Pages";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { UserContext } from "../UserContext/UserContext";

export const App = () => {
    return (
        <Provider store={store}>
            <UserContext>
                <ThemeContext>
                    <Layout>
                        <Pages />
                    </Layout>
                </ThemeContext>
            </UserContext>
        </Provider>
    );
};
