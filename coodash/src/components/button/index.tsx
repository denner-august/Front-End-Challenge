import styles from "./styles.module.scss";
import { useContext, useState } from "react";
import useSWR from "swr";
import axiosData from "../../services/axiosData";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Context from "../../Context/users";
import { ContextProps } from "../../Context/users/index";
export function Button() {
  const [pageIndex, setPageIndex] = useState(2);

  const { dataGlobal, setDataGlobal } = useContext(Context);
  const { data, error } = useFetch(
    `https://randomuser.me/api/?page=${pageIndex}&results=10&seed=abc`
  );

  function newPages() {
    setPageIndex(pageIndex + 1);
    if (data) {
      setDataGlobal([...dataGlobal, ...data]);
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
