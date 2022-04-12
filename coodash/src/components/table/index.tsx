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
  const { data, search } = useContext(Context);

  const [filteredData, setFilteredData] = useState<any>();

  useEffect(() => {
    return setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (search === "") {
      return setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item: { name: { first: string } }) => {
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
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((user: any, index: number) => (
              <Tr key={index}>
                <Td>
                  {user.name.first} {user.name.last}
                </Td>
                <Td>{user.gender}</Td>
                <Td>{new Date(user.dob.date).toLocaleDateString("pt-br")}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }

  return <></>;
}
