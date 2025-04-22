import styles from "./HomePage.module.scss";
import { TabLink } from "../../TabRestorauntContainer/TabLink";

const HomePage = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <h3 className={styles.h3}>
                    Выбери самый подходящий для тебя ресторан
                </h3>
                <TabLink to="/restaurants">Перейти к ресторанам</TabLink>
            </div>
        </div>
    );
};

export default HomePage;