import { Nota } from "../models/Nota.model";
export function Notas({ notas }: { notas: Nota[] }) {
  return (
    <ul>
      {notas.map((nota, index) => (
        <li key={index}>
          <section>
            <header>
              <h3>{nota.titulo}</h3>
            </header>
            <p>{nota.texto}</p>
          </section>
        </li>
      ))}
    </ul>
  );
}
