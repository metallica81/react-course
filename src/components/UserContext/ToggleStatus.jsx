"use client"

import { use } from "react";
import { CommonButton } from "../CommonButton/CommonButton";
import { UserContext } from "./index";
import styles from "./ToggleStatus.module.scss";

export const ToggleStatus = () => {
    const { isAuth, toggleStatus, userName } = use(UserContext);
    
    return (
        <>
            {!!isAuth && <span className={styles.span}>{userName}</span>}
            <CommonButton
                onClick={toggleStatus}
                externalSettings={styles.externalSettings}
            >
                {isAuth ? "sign out" : "sign in"}
            </CommonButton>
        </>
    );
};
