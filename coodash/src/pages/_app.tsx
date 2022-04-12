import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/Styles.scss";
import { ConxtProvider } from "../Context/users";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConxtProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ConxtProvider>
  );
}

export default MyApp;
