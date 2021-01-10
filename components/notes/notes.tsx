import { Note } from '../../models';
import { Card } from '../card/card';

export function Notes({ notes }: { notes: Note[] }): JSX.Element {
    return (
        <ul>
            {notes.map((note, index) => (
                <li key={index}>
                    <Card note={note}></Card>
                </li>
            ))}
        </ul>
    );
}
