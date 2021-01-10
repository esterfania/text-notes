import { Note } from '../../models';
import styles from './card.module.scss';

export function Card({ note }: { note: Note }): JSX.Element {
    return (
        <div className={styles.card}>
            <article className={styles.card__item}>
                <h3 className={styles.card__title}>{note.title}</h3>
                <p className={styles.card__text}>{note.text}</p>
            </article>
        </div>
    );
}
