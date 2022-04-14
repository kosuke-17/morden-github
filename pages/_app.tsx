import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Login } from "../components";
import styled from "styled-components";
import ProfileS from "../components/ProfileS";
import { NavBar } from "../components";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { useState } from "react";

const Layout = styled.div`
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(5, 253, 30, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(180deg, #fbfafa 0%, rgba(251, 250, 250, 0) 100%);
`;
const Body = styled.div`
  display: flex;
`;
const BodyLeft = styled.div`
  width: 30%;
`;
const BodyRight = styled.div`
  width: 70%;
`;
const UnderLine = styled.div`
  position: relative;
  top: 3rem;
  border-bottom: solid 2px rgba(211, 210, 210, 0.5);
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Layout>
      {isLogin ? (
        <ApolloProvider client={client}>
          <Header />
          <UnderLine />
          <Body>
            <BodyLeft>
              <ProfileS />
            </BodyLeft>
            <BodyRight>
              <NavBar />
              <Component {...pageProps} />
            </BodyRight>
          </Body>
        </ApolloProvider>
      ) : (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </Layout>
  );
};

export default MyApp;
