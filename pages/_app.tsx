import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
