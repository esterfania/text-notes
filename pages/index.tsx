import { Form, Notes } from '../components/index';
import { Note } from '../models/index';

const notes: Note[] = [
    { titulo: 'Nova nota', texto: 'Texto' },
    { titulo: 'Nova nota2', texto: 'Texto2' },
    { titulo: 'Nova nota3', texto: 'Texto3' }
];

export default function Home() {
    return (
        <section>
            <Form />
            <Notes notes={notes} />
        </section>
    );
}
