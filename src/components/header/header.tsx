import styles from './header.module.scss';

export default function HeaderComponent(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Text notes</h1>
        </header>
    );
}
