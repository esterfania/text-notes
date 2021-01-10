import { ChangeEvent, Component, FormEvent } from 'react';

import { Note } from '../../models/note.model';

export class Form extends Component {
    private note: Note;

    constructor(props) {
        super(props);
        this.note = { titulo: '', texto: '' };
    }

    handlerCleateNote(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handlerCleateNote.bind(this)}>
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
}
