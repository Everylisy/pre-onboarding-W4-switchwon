import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import type { IPropsPagination } from "../../types";

const Pagination = ({
  totalPageCount,
  pageNum,
  searchParams,
  setPageNum,
}: IPropsPagination) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (pageNum > totalPageCount) {
      searchParams.set("page", String(totalPageCount));
      setPageNum(searchParams);
    }
    if (isNaN(pageNum)) {
      searchParams.set("page", "1");
      setPageNum(searchParams);
    }
  }, [pageNum, searchParams]);

  const prevBtnHandler = () => {
    pageNum > 0 && searchParams.set("page", String(pageNum - 1));
    setPageNum(searchParams);
  };

  const nextBtnHandler = () => {
    totalPageCount > pageNum && searchParams.set("page", String(pageNum + 1));
    setPageNum(searchParams);
  };

  const numberBtnHandler = (index: number) => {
    searchParams.set("page", String(index + 1));
    setPageNum(searchParams);
  };

  return (
    <>
      <Button onClick={prevBtnHandler} isDisabled={pageNum === 1}>
        &larr; 이전
      </Button>

      {Array(totalPageCount)
        .fill(0)
        .map((_, idx) => (
          <Button
            variant="ghost"
            isActive={idx + 1 === pageNum}
            key={idx + 1}
            onClick={() => numberBtnHandler(idx)}
          >
            {idx + 1}
          </Button>
        ))}

      <Button onClick={nextBtnHandler} isDisabled={pageNum === totalPageCount}>
        다음 &rarr;
      </Button>
    </>
  );
};

export default Pagination;
