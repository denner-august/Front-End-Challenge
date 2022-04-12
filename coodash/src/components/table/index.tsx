import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useContext } from "react";
import Context from "../../Context/users";
import styles from "./styles.module.scss";

export function TableNames() {
  const { data } = useContext(Context);

  if (data) {
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
            {data.map((user: any, index: number) => (
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
