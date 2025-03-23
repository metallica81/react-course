import { UserContext as UserContextProvider } from ".";
import { useState } from "react";

export const UserContext = ({ children }) => {
    const [status, setStatus] = useState("sign out");

    const toggleStatus = () => {
        if (status === "sign in") {
            setStatus("sign out");
        } else {
            setStatus("sign in");
        }
    };

    const userName = "userName";

    return (
        <UserContextProvider value={{ status, toggleStatus, userName }}>
            {children}
        </UserContextProvider>
    );
};
