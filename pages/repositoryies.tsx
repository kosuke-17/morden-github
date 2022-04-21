import styled from "styled-components";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import client from "../apollo-client";
import { SearchRepos } from "../components/molecules/index";
import { REPOSITORIES_QUERY } from "../common/Query";
import { Repository } from "../components/index";
import { RepositoriesType } from "../utils/Types";

const Layout = styled.div`
  margin-top: 10px;
  width: 80%;
  @media screen and (max-width: 940px) {
    margin-left: 50px;
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query({ query: REPOSITORIES_QUERY });
  return {
    props: data,
  };
};

const repositoryies = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const userName = data.user.login;
  const allRepos = data.user.repositories.edges;

  const repos = allRepos.filter(
    (repo: { node: { owner: { login: String } } }) => {
      return repo.node.owner.login === userName;
    }
  );
  console.log(repos);
  return (
    <>
      <SearchRepos></SearchRepos>
      <Layout>
        {repos.map((repo: RepositoriesType) => {
          return <Repository key={repo.node.id} repo={repo}></Repository>;
        })}
      </Layout>
    </>
  );
};

export default repositoryies;
