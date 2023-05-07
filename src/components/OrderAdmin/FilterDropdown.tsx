import { Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

export const DROPDOWN_OPTIONS = ["완료", "미완료"];

const FilterDropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("status", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Select
        onChange={changeSelectHandler}
        value={searchParams.get("status") || ""}
        size="sm"
        variant="unstyled"
        color="GrayText"
      >
        <option value="">주문상태: 전체</option>
        {DROPDOWN_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default FilterDropdown;
