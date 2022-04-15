import styles from "./styles.module.scss";
import { Search } from "../search/index";
import { Dispatch, SetStateAction, useState } from "react";
import { TableNames } from "../table";

export function Content({pacienteNumber}:any) {
  const [search, setSearch] = useState<Dispatch<SetStateAction<string>>>();

  return (
    <>
      <p className={styles.texto}>
        A empresa Pharma Inc, está trabalhando em um projeto em colaboração com
        sua base de clientes para facilitar a gestão e visualização da
        informação dos seus pacientes de maneira simples e objetiva.
      </p>

      <Search searching={setSearch} />
      <main className={styles.conteudo}>
        <TableNames dadosPaciente={pacienteNumber} />
      </main>
    </>
  );
}
