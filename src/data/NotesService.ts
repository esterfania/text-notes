import { useState, useEffect } from 'react';
export default function NotesService() {
    const [notes, setNotes] = useState([]);
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        emit();
    }, [notes]);

    function createNotes(note) {
        const newObject = { ...note };
        const newArrayOfNotes = [...notes, newObject];
        setNotes(newArrayOfNotes);
    }

    function deleteNotes(index) {
        const newNotes = notes.filter((item, i) => i != index);
        setNotes(newNotes);
    }

    function subscribe(func) {
        subscribers.push(func);
    }
    function unsubscribe(func) {
        setSubscribers(subscribers.filter((f) => f !== func));
    }

    function emit() {
        subscribers.forEach((func) => {
            func(notes);
        });
    }

    return {
        createNotes,
        deleteNotes,
        subscribe,
        unsubscribe
    };
}
