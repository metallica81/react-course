import "../index.css";
import { App } from "../components/App/App";
import { Layout } from "../components/Layout/Layout";

export const metadata = {
    title: "next app",
    description: "restaurant app",
};

export const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            </head>
            <body>
                <App>
                    <Layout>
                        {children}
                    </Layout>
                </App>
            </body>
        </html>
    );
};

export default RootLayout;
