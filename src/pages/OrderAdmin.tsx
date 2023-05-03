import Layout, {
  FooterWrapper,
  MainWrapper,
  NavWrapper,
} from "../components/common/Layout";

import LoadingSpinner from "../components/common/LoadingSpinner";
import FilterDropdown from "../components/OrderAdmin/FilterDropdown";
import Pagination from "../components/OrderAdmin/Pagination";
import SearchInput from "../components/OrderAdmin/SearchInput";
import Table from "../components/Table/Table";

import { useFetchOrderData } from "../hooks/useFetchOrderData";
import { useGetSearchParams } from "../hooks/useGetSearchParams";

import type { IOrderData } from "../types";

const LIMIT = 50;

const OrderAdmin = () => {
  const { data, isLoading } = useFetchOrderData();
  const { page, searchParams, setSearchParams } = useGetSearchParams();
  const offset = (page - 1) * LIMIT;

  const headers: string[] = Object.keys({ ...data }[0] || {});
  const items: IOrderData[] = Object.values(data || {});

  const totalPage = Math.ceil(items.length / LIMIT);

  const orderData = (data: IOrderData[]) => {
    if (items) {
      const slicedItems = data.slice(offset, offset + LIMIT);
      return slicedItems;
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Layout>
      <NavWrapper>
        <SearchInput />
        <FilterDropdown />
      </NavWrapper>

      <MainWrapper>
        <Table headers={headers} items={orderData(items)} />
      </MainWrapper>

      <FooterWrapper>
        <Pagination
          page={page}
          setPage={setSearchParams}
          totalPage={totalPage}
          searchParams={searchParams}
        />
      </FooterWrapper>
    </Layout>
  );
};

export default OrderAdmin;
