import Header from "../components/common/Header";
import Layout, {
  FooterWrapper,
  MainWrapper,
  NavContainer,
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

  return (
    <Layout>
      <NavWrapper>
        <NavContainer>
          <SearchInput />
          <FilterDropdown />
        </NavContainer>
      </NavWrapper>

      <MainWrapper>
        <Header content="주문 내역" />
        {isLoading && <LoadingSpinner />}
        {!isLoading && <Table />}
      </MainWrapper>

      <FooterWrapper>
        <Pagination totalPage={totalPage} />
      </FooterWrapper>
    </Layout>
  );
};

export default OrderAdmin;
