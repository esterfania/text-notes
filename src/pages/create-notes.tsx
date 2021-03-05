import { useState } from 'react';

import { Form, Notes } from '../components/index';
import { Note } from '../models/index';
import style from '../styles/Notes.module.scss';

export function CreateNotes() {
    const [notes, setNotes] = useState([]);

    const deleteNotes = (index: number) => {
        const newArrayOfNotes = [...notes];
        newArrayOfNotes.splice(index, 1);
        setNotes(newArrayOfNotes);
    };

    const createNotes = (note: Note) => {
        const newObject = { ...note };
        const newArrayOfNotes = [...notes, newObject];
        setNotes(newArrayOfNotes);
    };

    return (
        <section className={style.container}>
            <Form createNotes={createNotes} />
            <Notes deleteNotes={deleteNotes} notes={notes} />
        </section>
    );
}
