export function Card({ note }) {
  return (
    <section>
      <header>
        <h3>{note.titulo}</h3>
      </header>
      <p>{note.texto}</p>
    </section>
  );
}
