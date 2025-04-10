import { UserContext as UserContextProvider } from ".";
import { useState } from "react";

export const UserContext = ({ children }) => {
    const [userStatus, setUserStatus] = useState({
        isAuth: false,
        userId: null,
        userName: null,
    });

    const toggleStatus = () => {
        if (!userStatus.isAuth) {
            setUserStatus({
                isAuth: true,
                userId: "oVEA4kQjDcG5dfasfasdfsfasfasfas",
                userName: "userName",
            });
        } else {
            setUserStatus({
                isAuth: false,
                userId: null,
                userName: null,
            });
        }
    };

    return (
        <UserContextProvider
            value={{
                isAuth: userStatus.isAuth,
                userId: userStatus.userId,
                userName: userStatus.userName,
                toggleStatus,
            }}
        >
            {children}
        </UserContextProvider>
    );
};
