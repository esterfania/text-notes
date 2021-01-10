import { Component } from 'react';

import { Form, Notes } from '../components/index';
import { Note } from '../models/index';

interface IHomeProps {}

interface IHomeState {
    notes: Note[];
}
export default class Home extends Component<IHomeProps, IHomeState> {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    render() {
        return (
            <section>
                <Form createNotes={this.createNotes.bind(this)} />
                <Notes notes={this.state.notes} />
            </section>
        );
    }

    private createNotes(note: Note) {
        const newArrayNotes = [...this.state.notes, note];
        this.setState({
            notes: newArrayNotes
        });
    }
}
