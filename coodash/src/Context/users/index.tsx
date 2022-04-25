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
  dataGlobal: any;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setDataGlobal: (value: any) => void;
  pacienteObject: { paciente: string; position: string };
  setPacienteObject: Dispatch<
    SetStateAction<{ paciente: string; position: string }>
  >;
}

const Context = createContext({} as ContextProps);

export const ConxtProvider = (props: { children: ReactChild }) => {
  const [search, setSearch] = useState("");
  const [dataGlobal, setDataGlobal] = useState([]);
  const [pacienteObject, setPacienteObject] = useState({
    paciente: "",
    position: "",
  });

  const { data, error } = useFetch(
    "https://randomuser.me/api/?page=1&results=50&seed=1"
  );

  useEffect(() => {
    if (data) {
      setDataGlobal(data);
    }
  }, [data]);

  return (
    <Context.Provider
      value={{
        dataGlobal,
        setDataGlobal,
        search,
        setSearch,
        pacienteObject,
        setPacienteObject,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
