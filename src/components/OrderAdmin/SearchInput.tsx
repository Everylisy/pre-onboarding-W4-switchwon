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
        onChange={(e) => setSearchName(e.target.value)}
        value={serachName}
        placeholder="고객 이름 검색"
        variant="filled"
        width={{ base: "48", sm: "48", md: "xs" }}
        fontSize="sm"
        borderRadius="3xl"
        focusBorderColor="#A0AEC0"
      />
    </form>
  );
};

export default SearchInput;
