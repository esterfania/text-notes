import { Component } from 'react';

import { Form, Notes } from '../components/index';
import { Note } from '../models/index';
import style from '../styles/Notes.module.scss';

interface INotesProps {}

interface INotesState {
    notes: Note[];
}
export default class CreateNotes extends Component<INotesProps, INotesState> {
    constructor(props: INotesProps) {
        super(props);

        this.state = {
            notes: []
        };
    }
    private deleteNotes(index: number) {
        const arrayNotes = this.state.notes;
        arrayNotes.splice(index, 1);
        this.setState({ notes: arrayNotes });
    }

    render(): JSX.Element {
        return (
            <section className={style.container}>
                <Form createNotes={this.createNotes.bind(this)} />
                <Notes deleteNotes={this.deleteNotes.bind(this)} notes={this.state.notes} />
            </section>
        );
    }

    private createNotes(note: Note): void {
        const newObject = { title: note.title, text: note.text };
        const newArrayOfNotes = [...this.state.notes, newObject];
        this.setState({
            notes: newArrayOfNotes
        });
    }
}
