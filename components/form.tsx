export function Form() {
  return (
    <form>
      <fieldset>
        <label placeholder="Título"></label>
        <input name="titulo" placeholder="Título" />
        <label placeholder="Insira seu texto"></label>
        <textarea name="texto" placeholder="Escreva sua nota..." />
        <button>Criar nota</button>
      </fieldset>
    </form>
  );
}
