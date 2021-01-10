import { ChangeEvent, Component, FormEvent } from 'react';

import { Note } from '../../models/note.model';
import styles from './form.module.scss';
interface INoteProps {
    createNotes: any;
}

export class Form extends Component<INoteProps> {
    private note: Note;

    constructor(props: INoteProps) {
        super(props);
        this.note = { titulo: '', texto: '' };
    }

    render(): JSX.Element {
        return (
            <form className={styles.form} onSubmit={this.createNotes.bind(this)}>
                <fieldset className={styles.form__field}>
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Título"
                        onChange={this.handlerChangeTitle.bind(this)}
                        className={styles.form__input}
                    />
                    <textarea
                        name="texto"
                        rows={15}
                        placeholder="Escreva sua nota..."
                        onChange={this.handlerChangeText.bind(this)}
                        className={styles.form__input}
                    />
                    <button className={styles.btn} type="submit">
                        Criar nota
                    </button>
                </fieldset>
            </form>
        );
    }

    private handlerChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
        this.note.titulo = event.target.value;
    }

    private handlerChangeText(event: ChangeEvent<HTMLTextAreaElement>): void {
        this.note.texto = event.target.value;
    }

    private createNotes(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNotes(this.note);
    }
}
