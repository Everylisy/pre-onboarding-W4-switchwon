import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Thead,
} from "@chakra-ui/react";
import type { IPropsTable } from "../../types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ headers, transactions }: IPropsTable) => {
  return (
    <TableContainer as="section" textAlign="center">
      <ChakraTable variant="simple">
        <Thead>
          <TableHeader headers={headers} />
        </Thead>

        <Tbody>
          <TableBody transactions={transactions} />
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
