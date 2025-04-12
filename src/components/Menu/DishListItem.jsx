"use client"

import styles from "./Menu.module.scss";
import Link from "next/link";

export function DishListItem({ name, dishId }) {

    if (!dishId) {
        return null
    }

    return (
        <li className={styles.root}>
            <Link href={`/dish/${dishId}`}>{name}</Link>
        </li>
    );
}