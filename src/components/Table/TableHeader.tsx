import { Button, Th, Tr } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import type { IPropsTableHeader } from "../../types";

export const HEADER_TRANS = [
  "주문 ID",
  "거래시간",
  "주문상태",
  "고객 ID",
  "고객명",
  "거래액",
];

const TableHeader = ({ headers }: IPropsTableHeader) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOption = searchParams.get("sort");
  const translatedHeaders = headers.map((_, idx) => HEADER_TRANS[idx]);

  const sortHandler = (header: string) => {
    if (header === sortOption) searchParams.set("sort", "");
    else searchParams.set("sort", header);
    setSearchParams(searchParams);
  };

  return (
    <Tr>
      {translatedHeaders.map((header) => (
        <Th
          key={header}
          fontSize="md"
          fontWeight="semibold"
          fontFamily="Pretendard Variable"
        >
          {header === "주문 ID" || header === "거래시간" ? (
            <Button onClick={() => sortHandler(header)}>{header}</Button>
          ) : (
            header
          )}
        </Th>
      ))}
    </Tr>
  );
};

export default TableHeader;
