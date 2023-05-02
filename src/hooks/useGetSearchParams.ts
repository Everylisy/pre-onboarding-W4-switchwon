import { useSearchParams } from "react-router-dom";

export const useGetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNum =
    Number(searchParams.get("page")) <= 0
      ? 1
      : Number(searchParams.get("page"));
  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const sortOption = searchParams.get("sort");

  return { pageNum, name, status, sortOption, searchParams, setSearchParams };
};
