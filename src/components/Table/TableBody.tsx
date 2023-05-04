import { Td, Tr } from "@chakra-ui/react";
import { useFetchOrderData } from "../../hooks/useFetchOrderData";
import { useGetSearchParams } from "../../hooks/useGetSearchParams";
import { LIMIT } from "../../pages/OrderAdmin";

const TableBody = () => {
  const { data } = useFetchOrderData();
  const { page } = useGetSearchParams();
  const offset = (page - 1) * LIMIT;

  const slicedTransactions = Object.values(data).slice(offset, offset + LIMIT);

  return (
    <>
      {slicedTransactions?.map((transaction) => (
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
