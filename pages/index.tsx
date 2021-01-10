import { Component } from 'react';

import { Form, Notes } from '../components/index';
import { Note } from '../models/index';

interface IHomeProps {}

interface IHomeState {
    notes: Note[];
}
export default class Home extends Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
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
        const newObject = { titulo: note.titulo, texto: note.texto };
        const newArrayOfNotes = [...this.state.notes, newObject];
        this.setState({
            notes: newArrayOfNotes
        });
    }
}
