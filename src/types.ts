import type { NavigateOptions, URLSearchParamsInit } from "react-router-dom";

export interface IOrderData {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IPropsTable {
  headers?: string[];
  transactions?: IOrderData[];
}

export interface IPropsPagination {
  page: number;
  setPage: (
    nextInit?:
      | URLSearchParamsInit
      | ((prev: URLSearchParams) => URLSearchParamsInit),
    navigateOpts?: NavigateOptions,
  ) => void;
  totalPage: number;
  searchParams: URLSearchParams;
}
