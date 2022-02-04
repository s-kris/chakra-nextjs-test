import { ChakraProvider } from "@chakra-ui/react";

import theme from "./../themes/superblog";
import { AppProps } from "next/app";
import "./../styles/global-overrides.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
