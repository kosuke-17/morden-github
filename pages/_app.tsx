import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Login } from "../components";
import styled from "styled-components";
import ProfileS from "../components/ProfileS";
import { NavBar } from "../components";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { useState } from "react";
import { parseCookies } from "nookies";
import { Grid } from "@mui/material";

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
  justify-content: center;
`;

// const BackgroundImage = styled.div`
//   background-image: url("/github.png");
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
// const BodyLeft = styled.div`
//   width: 30%;
// `;
// const BodyRight = styled.div`
//   width: 70%;
// `;

const UnderLine = styled.div`
  position: relative;
  top: 3rem;
  border-bottom: solid 2px rgba(211, 210, 210, 0.5);
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const cookies = parseCookies();
  let existToken = "";
  if (cookies.accessToken) {
    existToken = cookies.accessToken;
  } else {
    existToken = "";
  }
  const [isLogin, setIsLogin] = useState(false);
  // pagesに存在しないと500エラー
  const getAccessToken = async () => {
    const result = await fetch("/api/githubAuth", {}).catch((err) =>
      console.log(err)
    );
    console.log("result" + JSON.stringify(result));
  };
  return (
    <Layout>
      {existToken && existToken}
      {isLogin ? (
        <ApolloProvider client={client}>
          <Header isLogin={isLogin} setIsLogin={setIsLogin} />
          <UnderLine />
          <Body>
            <Grid container>
              <Grid item xs={12} sm={3.5}>
                {/* <BodyLeft> */}
                <ProfileS />
                {/* </BodyLeft> */}
              </Grid>

              <Grid item xs={12} sm={8.5}>
                {/* <BodyRight> */}
                <NavBar />
                <Component {...pageProps} />
                {/* </BodyRight> */}
              </Grid>
            </Grid>
          </Body>
        </ApolloProvider>
      ) : (
        <Login
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          getAccessToken={getAccessToken}
        />
      )}
    </Layout>
  );
};

export default MyApp;
