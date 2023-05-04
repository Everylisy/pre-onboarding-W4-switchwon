import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useGetSearchParams } from "../../hooks/useGetSearchParams";
import type { IPropsPagination } from "../../types";

const Pagination = ({ totalPage }: IPropsPagination) => {
  const { page, searchParams, setSearchParams: setPage } = useGetSearchParams();
  const [pageBlock, setPageBlock] = useState(() => {
    return Math.ceil(page / 5);
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    if (page > totalPage || isNaN(page)) {
      searchParams.set("page", "1");
      setPage(searchParams);
    }

    setPage(searchParams);
  }, [page, totalPage]);

  const prevBtnHandler = () => {
    page > 0 && searchParams.set("page", String(page - 1));
    setPage(searchParams);
    if ((page - 1) % 5 === 0) {
      setPageBlock((prevBlock) => prevBlock - 1);
    }
  };

  const nextBtnHandler = () => {
    totalPage > page && searchParams.set("page", String(page + 1));
    setPage(searchParams);
    if (page % 5 === 0) {
      setPageBlock((prevBlock) => prevBlock + 1);
    }
  };

  const numberBtnHandler = (index: number) => {
    const newPage = index + 1;
    searchParams.set("page", String(newPage));
    setPage(searchParams);
  };

  const pagesInBlock = Array(5)
    .fill(0)
    .map((_, idx) => {
      const pageNumber = (pageBlock - 1) * 5 + idx + 1;
      return pageNumber > totalPage ? null : pageNumber;
    });

  return (
    <>
      <Button onClick={prevBtnHandler} isDisabled={page === 1}>
        &larr; 이전
      </Button>

      {pagesInBlock.map((pageNumber, idx) => {
        if (pageNumber === null) {
          return null;
        }
        return (
          <Button
            variant="ghost"
            isActive={pageNumber === page}
            key={idx + pageNumber}
            onClick={() => numberBtnHandler(pageNumber - 1)}
          >
            {pageNumber}
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
