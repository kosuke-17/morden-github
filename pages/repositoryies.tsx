import styled from "styled-components";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import client from "../apollo-client";
import { SearchRepos } from "../components/molecules/index";
import { REPOSITORIES_QUERY } from "../common/Query";

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query({ query: REPOSITORIES_QUERY });
  return {
    props: data,
  };
};
const repositoryies = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);

  return (
    <div>
      <SearchRepos></SearchRepos>
    </div>
  );
};

export default repositoryies;
