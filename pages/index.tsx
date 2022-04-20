import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import client from "../apollo-client";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

//  styled-components
// ----------------------------------------------
const WholeStyle = styled.div`
  opacity: 0.1;
`;

// ----------------------------------------------

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <></>
    // <WholeStyle>
    //   <Image src="/github.png" width="700" height="700" alt="背景" />
    // </WholeStyle>
  );
};

export default Home;
