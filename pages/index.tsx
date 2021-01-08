import Notas from "../components/notas";
import { Nota } from "../models/Nota.model";
const notas: Nota[] = [
  { titulo: "Nova nota", texto: "Texto" },
  { titulo: "Nova nota2", texto: "Texto2" },
];
export default function Home() {
  return (
    <section>
      <form>
        <fieldset>
          <label placeholder="Título"></label>
          <input name="titulo" placeholder="Título" />
          <label placeholder="Insira seu texto"></label>
          <textarea name="texto" placeholder="Escreva sua nota..." />
          <button>Criar nota</button>
        </fieldset>
      </form>
      <Notas notas={notas} />
    </section>
  );
}
