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

export function TableNames() {
  const { dataGlobal, search, pacienteObject } = useContext(Context);
  const [filteredData, setFilteredData] = useState<any>(undefined);
  const [openficha, setOpenFicha] = useState(false);
  const [paciente, setpaciente] = useState<any>("");
  const [infoResults, setInfoResults] = useState(0);

  useEffect(() => {
    if (dataGlobal != 0 && dataGlobal != undefined) {
      setInfoResults(dataGlobal.info.results);
      setFilteredData(dataGlobal);
    }
  }, [dataGlobal]);

  useEffect(() => {
    if (search === "") {
      return setFilteredData(dataGlobal);
    } else {
      let Data = dataGlobal.results.filter(
        (item: { name: { first: string; last: string } }) => {
          if (
            item.name.first.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            item.name.last.toLowerCase().indexOf(search.toLowerCase()) > -1
          ) {
            return item;
          }
        }
      );

      let DataFilter = { results: [...Data], info: dataGlobal.info };

      setFilteredData(DataFilter);
    }
  }, [search]);

  useEffect(() => {
    if (pacienteObject.paciente != "" && pacienteObject.position != "") {
      setOpenFicha(true);
    }
  }, [pacienteObject]);

  if (filteredData == 0) {
    return (
      <div>
        <p>carregando</p>
      </div>
    );
  }

  if (filteredData) {
    return (
      <TableContainer>
        <PacienteFicha
          numberPaciente={infoResults}
          dataPacientes={filteredData}
          paciente={paciente}
          pacienteObject={pacienteObject}
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
            {filteredData.results.map(
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

  return null;
}
