import styles from "./styles.module.scss";
import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import Context from "../../Context/users";
export function SelectGenderNationality() {
  const { setGender } = useContext(Context);
  return (
    <div className={styles.Container}>
      <Select
        width="50%"
        margin={"auto"}
        placeholder="Selecione o gênero"
        onClick={(value: { currentTarget: { value: string } }) =>
          setGender(value.currentTarget.value)
        }
      >
        <option value="male">Male</option>
        <option value="female">female</option>
      </Select>
    </div>
  );
}
