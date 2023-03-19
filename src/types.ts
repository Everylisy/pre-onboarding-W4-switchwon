export interface IOrderData {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IPropsToOrderAdmin {
  headers: string[];
  items: IOrderData[];
}
