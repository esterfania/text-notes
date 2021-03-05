import { Note } from '../../models';
import { Card } from '../card/card';
import styles from './notes.module.scss';
interface NotesProps {
    deleteNotes: (index: number) => void;
    notes: Note[];
}
export function Notes(props: NotesProps): JSX.Element {
    return (
        <ul className={styles.container}>
            {props.notes.map((note, index) => (
                <li className={styles.item} key={index}>
                    <Card index={index} deleteNotes={props.deleteNotes} note={note}></Card>
                </li>
            ))}
        </ul>
    );
}
