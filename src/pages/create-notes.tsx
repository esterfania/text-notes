import { Form, Notes } from '../components/index';
import style from '../styles/Notes.module.scss';
import NotesService from '../data/NotesService';

export function CreateNotes() {
    const notes = NotesService();
    return (
        <section className={style.container}>
            <Form createNotes={notes.createNotes} />
            <Notes deleteNotes={notes.deleteNotes} notes={notes} />
        </section>
    );
}
