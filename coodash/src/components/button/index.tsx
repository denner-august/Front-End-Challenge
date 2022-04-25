import styles from "./styles.module.scss";
import { useContext, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Context from "../../Context/users";
export function Button() {
  const [pageIndex, setPageIndex] = useState(50);

  const { dataGlobal, setDataGlobal } = useContext(Context);
  const { data, error } = useFetch(
    `https://randomuser.me/api/?page=1&results=${pageIndex}&seed=1`
  );

  function newPages() {
    setPageIndex(pageIndex + 50);
    if (data) {
      let FetchData = data.results.map((item: any) => item);
      const final = { results: [...FetchData], info: data.info };
      setDataGlobal(final);
    }
  }

  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={() => newPages()}
      >
        Carregar mais pacientes
      </button>
    </>
  );
}
