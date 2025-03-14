import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./components/Layout/Layout.jsx";
import { Pages } from "./components/Pages/Pages.jsx";

const root = document.getElementById("root");
createRoot(root).render(
    <Layout style={{ paddingLeft: "30px" }}>
        <Pages />
    </Layout>
);
