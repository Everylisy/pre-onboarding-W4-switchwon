import { useToast } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderData } from "../api/apis";
import { DROPDOWN_OPTIONS } from "../components/OrderAdmin/FilterDropdown";
import { HEADER_TRANS } from "../components/Table/TableHeader";
import type { IOrderData } from "../types";
import { useGetSearchParams } from "./useGetSearchParams";

const TODAY_DATE = "2023-03-08";

export const useFetchOrderData = () => {
  const { name, status, sortOption } = useGetSearchParams();
  const fallback: IOrderData[] | undefined = [];
  const toast = useToast();

  const { data = fallback, isLoading } = useQuery(
    ["orderData"],
    fetchOrderData,
    {
      refetchInterval: 5000,
      onError: (error) => {
        const title =
          error instanceof Error
            ? error.message
            : "error connecting to the server";
        toast({ title: title, status: "error" });
      },
      select: (data) => {
        const orderData: IOrderData[] = data.data
          ?.filter((v: IOrderData) => v.transaction_time.includes(TODAY_DATE))

          .filter((v: IOrderData) => {
            if (DROPDOWN_OPTIONS.includes(status as string)) {
              return v.status === (status === "True" ? true : false);
            }
            return v;
          })

          .filter((v: IOrderData) => {
            if (name) {
              return v.customer_name
                .toLowerCase()
                .includes(name?.toLowerCase() as string);
            }
            return v;
          })

          .sort((a: IOrderData, b: IOrderData) => {
            if (sortOption === HEADER_TRANS[0]) return b.id - a.id;
            else if (sortOption === HEADER_TRANS[1]) {
              return (
                +new Date(b.transaction_time) - +new Date(a.transaction_time)
              );
            }
            return a.id - b.id;
          });

        return orderData;
      },
    },
  );

  return { data, isLoading };
};
