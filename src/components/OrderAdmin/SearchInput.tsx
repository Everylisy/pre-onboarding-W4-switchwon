import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [serachName, setSearchName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchParams.set("name", serachName);
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        placeholder="고객 이름 검색"
        onChange={(e) => setSearchName(e.target.value)}
        width="sm"
        mr={8}
        value={serachName}
      />
    </form>
  );
};

export default SearchInput;
