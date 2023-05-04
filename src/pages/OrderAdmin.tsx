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

export const LIMIT = 50;

const OrderAdmin = () => {
  const { data, isLoading } = useFetchOrderData();

  const totalPage = Math.ceil(Object.values(data).length / LIMIT);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Layout>
      <NavWrapper>
        <SearchInput />
        <FilterDropdown />
      </NavWrapper>

      <MainWrapper>
        <Table />
      </MainWrapper>

      <FooterWrapper>
        <Pagination totalPage={totalPage} />
      </FooterWrapper>
    </Layout>
  );
};

export default OrderAdmin;
