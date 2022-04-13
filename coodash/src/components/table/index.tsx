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
import Context, { ContextProps } from "../../Context/users";
import styles from "./styles.module.scss";

export function TableNames() {
  const { dataGlobal, search } = useContext(Context);

  const [filteredData, setFilteredData] = useState<never[]>();

  useEffect(() => {
    return setFilteredData(dataGlobal);
  }, [dataGlobal]);

  useEffect(() => {
    if (search === "") {
      return setFilteredData(dataGlobal);
    } else {
      setFilteredData(
        dataGlobal.filter((item: { name: { first: string } }) => {
          if (
            item.name.first.toLowerCase().indexOf(search.toLowerCase()) > -1
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
                    <button onClick={() => console.log(user)}>
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
