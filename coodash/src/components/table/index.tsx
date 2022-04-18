import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context/users";
import styles from "./styles.module.scss";
import { PacienteFicha } from "../modal/index";

export function TableNames({ dadosPaciente }: any) {
  const { dataGlobal, search } = useContext(Context);
  const [filteredData, setFilteredData] = useState<never[]>();
  const [openficha, setOpenFicha] = useState(false);
  const [paciente, setpaciente] = useState<any>("");

  useEffect(() => {
    return setFilteredData(dataGlobal);
  }, [dataGlobal]);

  useEffect(() => {
    if (search === "") {
      return setFilteredData(dataGlobal);
    } else {
      setFilteredData(
        dataGlobal.filter((item: { name: { first: string; last: string } }) => {
          if (
            item.name.first.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            item.name.last.toLowerCase().indexOf(search.toLowerCase()) > -1
          ) {
            return item;
          }
        })
      );
    }
  }, [search]);

  if (filteredData) {
    return (
      <TableContainer>
        <PacienteFicha
          paciente={paciente}
          pacienteUrl={dadosPaciente}
          modalopen={openficha}
          closeModal={setOpenFicha}
        />
        <Table variant="unstyled" className={styles.table}>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>genero</Th>
              <Th>Nascimento</Th>
              <Th>ficha</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map(
              (
                user: {
                  name: { first: string; last: string };
                  gender: string;
                  dob: { date: Date };
                },
                index: number
              ) => (
                <Tr key={index}>
                  <Td>
                    {user.name.first} {user.name.last}
                  </Td>
                  <Td>{user.gender}</Td>
                  <Td>{new Date(user.dob.date).toLocaleDateString("pt-br")}</Td>
                  <Td className={styles.ficha}>
                    <button
                      onClick={() => {
                        setOpenFicha(true);
                        setpaciente(user);
                      }}
                    >
                      Vizualizar
                    </button>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }

  return <p>objeto vazio</p>;
}
