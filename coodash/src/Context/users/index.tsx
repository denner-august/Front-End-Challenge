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

interface ContextProps {
  data:
    | {
        name: string;
        gender: string;
        map?: any;
        id: { value: string };
      }
    | undefined;

  setDatafetch?: Dispatch<SetStateAction<undefined>>;
}

const Context = createContext({} as ContextProps);

export const ConxtProvider = (props: { children: ReactChild }) => {
  const [datafetch, setDatafetch] = useState([]);

  const fetcher = (url: string) =>
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => res.results);

  const { data, error } = useSWR(
    "https://randomuser.me/api/?page=1&results=10&seed=abc",
    fetcher
  );

  // setDatafetch((preve) => (preve = data));

  return <Context.Provider value={{ data }}>{props.children}</Context.Provider>;
};

export default Context;
