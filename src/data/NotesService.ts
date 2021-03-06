export default class NotesService {
    notes = [];
    _inscritos = [];

    createNotes(note) {
        const novaNota = { ...note };
        this.notes.push(novaNota);
        this.notificar();
    }

    deleteNotes(index) {
        this.notes.splice(index, 1);
        this.notificar();
    }

    subscribe(func) {
        this._inscritos.push(func);
    }
    unsubscribe(func) {
        this._inscritos = this._inscritos.filter((f) => f !== func);
    }

    notificar() {
        this._inscritos.forEach((func) => {
            func(this.notes);
        });
    }
}
