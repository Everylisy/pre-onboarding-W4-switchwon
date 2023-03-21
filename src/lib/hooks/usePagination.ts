import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../constants/pagination";

type HandleClick = (page: string) => void;

interface UsePagination {
  page: number;
  order: string;
  time: string;
  status: string;
  offset: number;
  handleClick: HandleClick;
}

const usePagination = (): UsePagination => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page =
    !searchParams.get("page") || 0 ? 1 : Number(searchParams.get("page"));
  const order = searchParams.get("order") ?? "default";
  const time = searchParams.get("time") ?? "default";
  const status = searchParams.get("status") ?? "default";

  const handleClick: HandleClick = (page) =>
    setSearchParams({
      page,
      order,
      time,
      status,
    });
  const offset = (page - 1) * LIMIT;

  return { page, order, time, status, offset, handleClick };
};
export default usePagination;
