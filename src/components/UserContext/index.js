import { createContext } from "react";

export const UserContext = createContext({
    isAuth: false,
    userId: null,
    userName: null,
});
