import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Thead,
} from "@chakra-ui/react";
import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = () => {
  return (
    <TableContainer as="section">
      <ChakraTable variant="simple">
        <Thead>
          <TableHeader />
        </Thead>

        <Tbody>
          <TableBody />
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default React.memo(Table);
