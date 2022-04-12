import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useContext } from "react";
import Context from "../../Context/users";
export function Search(props: any) {
  const { searching } = props;

  const { setSearch } = useContext(Context);

  return (
    <>
      <InputGroup width="50%" margin={"auto"}>
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
        <Input
          type="search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Pesquisar"
        />
      </InputGroup>
    </>
  );
}
