import styles from "../../styles/Card.module.scss";
export function Card({ note }) {
  return (
    <section className={`${styles.card}`}>
      <header>
        <h3>{note.titulo}</h3>
      </header>
      <p>{note.texto}</p>
    </section>
  );
}
