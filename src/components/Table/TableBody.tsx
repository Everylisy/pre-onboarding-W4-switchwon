import { Td, Tr } from "@chakra-ui/react";
import type { IPropsTable } from "../../types";

const TableBody = ({ transactions }: IPropsTable) => {
  return (
    <>
      {transactions?.map((transaction) => (
        <Tr key={transaction.id}>
          <Td>{transaction.id}</Td>
          <Td>{transaction.transaction_time}</Td>
          <Td>{transaction.status ? "완료" : "미완료"}</Td>
          <Td>{transaction.customer_id}</Td>
          <Td>{transaction.customer_name}</Td>
          <Td>{transaction.currency}</Td>
        </Tr>
      ))}
    </>
  );
};

export default TableBody;
