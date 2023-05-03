import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { IPropsPagination } from "../../types";

const Pagination = ({
  page,
  setPage,
  totalPage,
  searchParams,
}: IPropsPagination) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (page > totalPage) {
      searchParams.set("page", String(totalPage));
      setPage(searchParams);
    }
    if (isNaN(page)) {
      searchParams.set("page", "1");
      setPage(searchParams);
    }
  }, [page, searchParams]);

  const prevBtnHandler = () => {
    page > 0 && searchParams.set("page", String(page - 1));
    setPage(searchParams);
  };

  const nextBtnHandler = () => {
    totalPage > page && searchParams.set("page", String(page + 1));
    setPage(searchParams);
  };

  const numberBtnHandler = (index: number) => {
    searchParams.set("page", String(index + 1));
    setPage(searchParams);
  };

  return (
    <>
      <Button onClick={prevBtnHandler} isDisabled={page === 1}>
        &larr; 이전
      </Button>

      {Array(totalPage)
        .fill(0)
        .map((_, idx) => {
          return (
            <Button
              variant="ghost"
              isActive={idx + 1 === page}
              key={idx + 1}
              onClick={() => numberBtnHandler(idx)}
            >
              {idx + 1}
            </Button>
          );
        })}

      <Button onClick={nextBtnHandler} isDisabled={page === totalPage}>
        다음 &rarr;
      </Button>
    </>
  );
};

export default Pagination;
