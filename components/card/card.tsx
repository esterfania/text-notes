import { Note } from '../../models';
import styles from './card.module.scss';
interface CardProps {
    deleteNotes: (index: number) => void;
    note: Note;
    index: number;
}
export function Card(props: CardProps): JSX.Element {
    const handleDelete = () => {
        props.deleteNotes(props.index);
    };
    return (
        <section className={styles.card}>
            <header className={styles.card__item}>
                <h3 className={styles.card__title}>
                    {props.note.title}{' '}
                    <button className={styles.card__button} onClick={handleDelete}>
                        X
                    </button>
                </h3>
                <p className={styles.card__text}>{props.note.text}</p>
            </header>
        </section>
    );
}
