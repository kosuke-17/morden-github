/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from "react";
import client from "../apollo-client";
import { SearchRepos } from "../components/molecules/index";
import { REPOSITORIES_QUERY } from "../common/Query";
import { Repository } from "../components/molecules/index";
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
  const myrepos = allRepos.filter(
    (repo: { node: { owner: { login: String } } }) => {
      return repo.node.owner.login === userName;
    }
  );
  const [repos, setRepos] = useState(myrepos);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setRepos(
      myrepos.filter((repo: { node: { name: string } }) => {
        return repo.node.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <>
      <SearchRepos search={setSearchValue}></SearchRepos>
      <Layout>
        {repos.map((repo: RepositoriesType) => {
          return <Repository key={repo.node.id} repo={repo}></Repository>;
        })}
      </Layout>
    </>
  );
};

export default repositoryies;
