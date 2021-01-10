import { ChangeEvent, Component, FormEvent } from 'react';

import { Note } from '../../models/note.model';

interface INoteProps {
    createNotes: any;
}

export class Form extends Component<INoteProps> {
    private note: Note;

    constructor(props: any) {
        super(props);
        this.note = { titulo: '', texto: '' };
    }

    render() {
        return (
            <form onSubmit={this.createNotes.bind(this)}>
                <fieldset>
                    <label placeholder="Título"></label>
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Título"
                        onChange={this.handlerChangeTitle.bind(this)}
                    />
                    <label placeholder="Insira seu texto"></label>
                    <textarea
                        name="texto"
                        rows={15}
                        placeholder="Escreva sua nota..."
                        onChange={this.handlerChangeText.bind(this)}
                    />
                    <button type="submit">Criar nota</button>
                </fieldset>
            </form>
        );
    }

    private handlerChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        this.note.titulo = event.target.value;
    }

    private handlerChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
        this.note.texto = event.target.value;
    }

    private createNotes(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNotes(this.note);
    }
}
