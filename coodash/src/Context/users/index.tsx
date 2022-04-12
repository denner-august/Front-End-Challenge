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

export interface ContextProps {
  data: {
    name: string;
    gender: string;
    map: any;
    id: { value: string };
    filter: any;
  };

  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Context = createContext({} as ContextProps);

export const ConxtProvider = (props: { children: ReactChild }) => {
  const [search, setSearch] = useState("");

  const fetcher = (url: string) =>
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => res.results);

  const { data, error } = useSWR(
    "https://randomuser.me/api/?page=1&results=10&seed=abc",
    fetcher
  );

  return (
    <Context.Provider value={{ data, search, setSearch }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
