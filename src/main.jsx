import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./components/App/App.jsx";

const root = document.getElementById("root");

createRoot(root).render(
    <App />
);
