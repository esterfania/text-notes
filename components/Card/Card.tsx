import styles from './card.module.scss';
export function Card({ note }): JSX.Element {
    return (
        <section className={`${styles.card}`}>
            <header>
                <h3>{note.titulo}</h3>
            </header>
            <p>{note.texto}</p>
        </section>
    );
}
