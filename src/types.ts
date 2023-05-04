export interface IOrderData {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IPropsTable {
  orderData: IOrderData[];
}

export interface IPropsPagination {
  totalPage: number;
}
