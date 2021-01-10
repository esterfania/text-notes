import { Note } from '../../models';
import styles from './card.module.scss';

export function Card({ note }: { note: Note }): JSX.Element {
    return (
        <article className={styles.card}>
            <header className={styles.card__header}>
                <h3 className={styles.card__title}>{note.titulo}</h3>
            </header>
            <p className={styles.card__intro}>{note.texto}</p>
        </article>
    );
}
