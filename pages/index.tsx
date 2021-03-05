import HeaderComponent from '../components/header/header';
import { CreateNotes } from './create-notes';

export default function Home(): JSX.Element {
    return (
        <>
            <HeaderComponent />
            <CreateNotes />
        </>
    );
}
