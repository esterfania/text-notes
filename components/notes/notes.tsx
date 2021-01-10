import { Note } from '../../models';
import { Card } from '../card/card';
import styles from './notes.module.scss';
export function Notes({ notes }: { notes: Note[] }): JSX.Element {
    return (
        <ul className={styles.container}>
            {notes.map((note, index) => (
                <li key={index}>
                    <Card note={note}></Card>
                </li>
            ))}
        </ul>
    );
}
