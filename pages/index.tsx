import React from "react";

import { Notas, Formulario } from "../components/index";
import { Nota } from "../models/index";

const notas: Nota[] = [
  { titulo: "Nova nota", texto: "Texto" },
  { titulo: "Nova nota2", texto: "Texto2" },
  { titulo: "Nova nota3", texto: "Texto3" },
];

export default function Home() {
  return (
    <section>
      <Formulario />
      <Notas notas={notas} />
    </section>
  );
}
