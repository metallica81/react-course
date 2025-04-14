import { ThemeContext } from "../ThemeContext/ThemeContext";
import { UserContext } from "../UserContext/UserContext";
import { ReduxContext } from "../ReduxContext/ReduxContext";
import "../../index.css";


export const App = ({children}) => {
    return (
        <ReduxContext>
            <UserContext>
                <ThemeContext>
                    {children}
                </ThemeContext>
            </UserContext>
        </ReduxContext>
    );
};

export default App;
