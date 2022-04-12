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
    data.map((item: any) => {
      console.log(item.name);
    });
  }

  return (
    <TableContainer>
      <Table variant="unstyled" className={styles.table}>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Genero</Th>
            <Th>Nascimento</Th>
          </Tr>
        </Thead>
        <Tbody></Tbody>
      </Table>
    </TableContainer>
  );
}
