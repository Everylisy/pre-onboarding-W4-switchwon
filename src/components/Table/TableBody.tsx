import { Badge, Td, Text, Tr } from "@chakra-ui/react";
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
      {slicedTransactions?.length === 0 && (
        <Tr>
          <Td colSpan={6}>
            <Text marginTop="80px" textAlign="center" color="gray.500">
              요청하신 결과가 없습니다.
            </Text>
          </Td>
        </Tr>
      )}

      {slicedTransactions?.map((transaction) => (
        <Tr key={transaction.id}>
          <Td>{transaction.id}</Td>
          <Td>{transaction.transaction_time}</Td>
          <Td>
            {transaction.status ? (
              <Badge colorScheme="green" fontSize="14px">
                완료
              </Badge>
            ) : (
              <Badge colorScheme="red" fontSize="14px">
                미완료
              </Badge>
            )}
          </Td>
          <Td>{transaction.customer_id}</Td>
          <Td>{transaction.customer_name}</Td>
          <Td>{transaction.currency}</Td>
        </Tr>
      ))}
    </>
  );
};

export default TableBody;
