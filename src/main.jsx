import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { restaurants } from "./mock.js";

const root = document.getElementById("root");
createRoot(root).render(
    restaurants.map((restaurant) => {
        return (
            <div style={{"padding-left": "30px"}}>
                <h2>{restaurant.name}</h2>
                <h3>Меню</h3>
                <ul>
                    {
                        restaurant.menu.map((menu) => {
                            return <li>{menu.name}</li>;
                        })
                    }
                </ul>

                <h3>Отзывы</h3>
                <ul>
                    {
                        restaurant.reviews.map((reviews) => {
                            return <li>{reviews.text}</li>;
                        })
                    }
                </ul>
            </div>
        )
    })
);
