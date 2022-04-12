import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useContext } from "react";
import Context from "../../Context/users";
export function Search(props: any) {
  const { searching } = props;

  const { data } = useContext(Context);

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
