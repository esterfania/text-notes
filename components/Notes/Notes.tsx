import { Card } from '../card/card';

export function Notes({ notes }) {
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
