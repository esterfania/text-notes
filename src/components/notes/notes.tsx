import { useEffect, useState } from 'react';
import { Card } from '../card/card';
import styles from './notes.module.scss';
interface NotesProps {
    deleteNotes: (index: number) => void;
    notes: any;
}
export function Notes(props: NotesProps): JSX.Element {
    const [listNotes, setListNotes] = useState([]);

    useEffect(() => {
        props.notes.subscribe(_novasNotas);
    }, []);

    const _novasNotas = (notas) => {
        setListNotes([...listNotes, ...notas]);
    };
    return (
        <ul className={styles.container}>
            {listNotes.map((note, index) => (
                <li className={styles.item} key={index}>
                    <Card index={index} deleteNotes={props.deleteNotes} note={note}></Card>
                </li>
            ))}
        </ul>
    );
}
