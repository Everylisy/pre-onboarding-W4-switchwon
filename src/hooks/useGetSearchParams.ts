import { useSearchParams } from "react-router-dom";

export const useGetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page =
    Number(searchParams.get("page")) <= 0 ||
    isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));
  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const sortOption = searchParams.get("sort");

  return { page, name, status, sortOption, searchParams, setSearchParams };
};
