import { UserContext as UserContextProvider } from ".";
import { useState } from "react";

const userName = "userName";

export const UserContext = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const toggleStatus = () => {
        if (!isAuth) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    };

    const userId = 'oVEA4kQjDcG5dfasfasdfasfsdfsafsad';

    return (
        <UserContextProvider value={{ isAuth, toggleStatus, userName, userId }}>
            {children}
        </UserContextProvider>
    );
};
