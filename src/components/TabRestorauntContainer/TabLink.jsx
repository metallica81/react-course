import Link from 'next/link';
import styles from './TabLink.module.scss';

export function TabLink({ to, children }) {
    return <Link className={styles.tabLink} href={to}>{children}</Link>;
}
