import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction, useState } from "react";
export function Search(props: any) {
  const { searching } = props;

  return (
    <>
      <InputGroup width="50%" margin={"auto"}>
        <InputRightElement children={<Search2Icon />} />
        <Input
          type="search"
          onChange={(event) => searching(event.target.value)}
          placeholder="Pesquisar"
        />
      </InputGroup>
    </>
  );
}
