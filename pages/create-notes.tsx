import { Component } from 'react';

import { Form, Notes } from '../components/index';
import { Note } from '../models/index';

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

    render(): JSX.Element {
        return (
            <section>
                <Form createNotes={this.createNotes.bind(this)} />
                <Notes notes={this.state.notes} />
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
