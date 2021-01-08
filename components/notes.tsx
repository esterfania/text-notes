import { Note } from "../models/Note.model";
import { Card } from "./card";
export function Notes({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <Card note={note}></Card>
        </li>
      ))}
    </ul>
  );
}
