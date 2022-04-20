import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import client from "../apollo-client";
import { REPOSITORIES_QUERY } from "../common/Query";

export const getStaticProps: GetStaticProps = async () => {
  const  data  = await client.query({ query: REPOSITORIES_QUERY });
  return {
    props: data,
  };
};
const repositoryies = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);

  return <div>repositoryies</div>;
};

export default repositoryies;
