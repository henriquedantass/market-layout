import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { MarketContextProvider } from "../src/context/market.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MarketContextProvider>
        <Component {...pageProps} />
      </MarketContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
