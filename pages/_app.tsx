import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import styled from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = styled.div`
    height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(5, 253, 30, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(180deg, #fbfafa 0%, rgba(251, 250, 250, 0) 100%);
  `;
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
