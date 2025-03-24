import { use } from "react";
import { CommonButton } from "../CommonButton/CommonButton";
import { UserContext } from "./index";
import styles from './ToggleStatus.module.scss';

export const ToggleStatus = () => {
    const { status, toggleStatus, userName } = use(UserContext);

    return (
        <>
            {status === "sign out" && (
                <span className={styles.span}>{userName}</span>
            )}
            <CommonButton
                onClick={toggleStatus}
                externalSettings={styles.externalSettings}
            >
                {status === "sign in" ? "sign out" : "sign in"}
            </CommonButton>
        </>
    );
};
