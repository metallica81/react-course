import { Layout } from "../Layout/Layout";
import { Pages } from "../Pages/Pages";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { UserContext } from "../UserContext/UserContext";

export const App = () => {
    return (
        <UserContext>
            <ThemeContext>
                <Layout style={{ paddingLeft: "30px" }}>
                    <Pages />
                </Layout>
            </ThemeContext>
        </UserContext>
    );
};
