import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { restaurants } from "./mock.js";

const root = document.getElementById("root");
createRoot(root).render(
    restaurants.map((element) => {
        return createElement("div", {style: {"padding-left": "30px"}}, [
            createElement("h1", {}, element.name),
            createElement("h3", {}, "Меню"),
            createElement(
                "ul",
                {},
                element.menu.map((element) => {
                    return createElement("li", {}, element.name);
                })
            ),
            createElement("h3", {}, "Отзывы"),
            createElement(
                "ul",
                {},
                element.reviews.map((element) => {
                    return createElement("li", {}, element.text);
                })
            ),
        ]);
    })
);
