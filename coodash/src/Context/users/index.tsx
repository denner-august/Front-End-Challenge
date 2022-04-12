import axios from "axios";
import { createContext, ReactChild, useEffect, useState } from "react";

interface ContextProps {
  data:
    | {
        name: string;
        gender: string;
      }
    | any;
}

const Context = createContext({} as ContextProps);

export const ConxtProvider = (props: { children: ReactChild }) => {
  const [data, setData] = useState<ContextProps[]>();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.data)
      .then((response) => response.results)
      .then((response) => setData(response));
  }, []);

  return <Context.Provider value={{ data }}>{props.children}</Context.Provider>;
};

export default Context;
