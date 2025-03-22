import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./components/Layout/Layout.jsx";
import { Pages } from "./components/Pages/Pages.jsx";
import { createContext } from "react";

export const ThemeContext = createContext({theme: "light"});

const root = document.getElementById("root");
createRoot(root).render(
    <ThemeContext theme="light">
        <Layout style={{ paddingLeft: "30px" }}>
            <Pages />
        </Layout>
    </ThemeContext>
);
