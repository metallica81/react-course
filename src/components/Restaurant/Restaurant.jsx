import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Review";
import styles from './Restaurant.module.scss';

export const Restaurant = ({ name, menu = [], reviews = [] }) => {

    return (
        <section
            className={styles.section}
        >
            <h2>{name}</h2>
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviews={reviews} />}
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviews={reviews} />}
            {!!menu.length && <Menu menu={menu} />}
            {!!reviews.length && <Reviews reviews={reviews} />}
        </section>
    );
};
