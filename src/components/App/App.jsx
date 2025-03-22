import { Layout } from "../Layout/Layout";
import { Pages } from "../Pages/Pages";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const App = () => {
    return (
        <ThemeContext>
            <Layout style={{ paddingLeft: "30px" }}>
                <Pages />
            </Layout>
        </ThemeContext>
    );
};
