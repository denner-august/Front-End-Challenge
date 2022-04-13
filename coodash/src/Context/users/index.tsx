import useSWR from "swr";
import {
  createContext,
  Dispatch,
  ReactChild,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import axiosData from "../../services/axiosData";
import { useFetch } from "../../hooks/useFetch";

export interface ContextProps {
  dataGlobal: never[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setDataGlobal: (value: any) => void;
}

const Context = createContext({} as ContextProps);

export const ConxtProvider = (props: { children: ReactChild }) => {
  const [search, setSearch] = useState("");
  const [dataGlobal, setDataGlobal] = useState<never[]>([]);
  const { data, error } = useFetch(
    "https://randomuser.me/api/?page=1&results=10&seed=abc"
  );

  useEffect(() => {
    if (data) {
      setDataGlobal(data);
    }
  }, [data]);

  return (
    <Context.Provider value={{ dataGlobal, setDataGlobal, search, setSearch }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
