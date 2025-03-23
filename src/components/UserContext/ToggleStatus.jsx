import { use } from "react";
import { CommonButton } from "../CommonButton/CommonButton";
import { UserContext } from "./index";

export const ToggleStatus = () => {
    const { status, toggleStatus, userName } = use(UserContext);

    return (
        <>
            {status === "sign out" && (
                <span style={{ margin: "20px" }}>{userName}</span>
            )}
            <CommonButton
                onClick={toggleStatus}
                externalSettings={{ margin: "20px" }}
            >
                {status === "sign in" ? "sign out" : "sign in"}
            </CommonButton>
        </>
    );
};
