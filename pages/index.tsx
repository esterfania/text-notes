import React from "react";

import { Notes, Form } from "../components/index";
import { Nota } from "../models/index";

const notes: Nota[] = [
  { titulo: "Nova nota", texto: "Texto" },
  { titulo: "Nova nota2", texto: "Texto2" },
  { titulo: "Nova nota3", texto: "Texto3" },
];

export default function Home() {
  return (
    <section>
      <Form />
      <Notes notes={notes} />
    </section>
  );
}
