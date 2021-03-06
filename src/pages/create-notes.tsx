import { Form, Notes } from '../components/index';
import style from '../styles/Notes.module.scss';
import NotesService from '../data/NotesService';

export function CreateNotes() {
    const notes = new NotesService();
    return (
        <section className={style.container}>
            <Form createNotes={notes.createNotes.bind(notes)} />
            <Notes deleteNotes={notes.deleteNotes.bind(notes)} notes={notes} />
        </section>
    );
}
