import { Component } from 'react';

import { Note } from '../../models/note.model';
import { Card } from '../card/card';

interface INotesProp {
    notes: Note[];
}

export class Notes extends Component<INotesProp> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.notes.map((note, index) => (
                    <li key={index}>
                        <Card note={note}></Card>
                    </li>
                ))}
            </ul>
        );
    }
}
