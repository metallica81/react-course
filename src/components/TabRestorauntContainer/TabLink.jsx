// import Link from 'next/link';
import { Link } from 'react-router';
import styles from './TabLink.module.scss';

export function TabLink({ to, children }) {
    return <Link className={styles.tabLink} to={to}>{children}</Link>;
}
