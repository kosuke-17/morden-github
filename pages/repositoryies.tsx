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
  // 取得したリポジトリを自分のものだけに絞り込む
  const myrepos = allRepos.filter(
    (repo: { node: { owner: { login: String } } }) => {
      return repo.node.owner.login === userName;
    }
  );

  // 言語の配列を作成する
  let languages = [];
  for (let repo of myrepos) {
    languages.push(repo.node.primaryLanguage.name);
  }
  languages = Array.from(new Set(languages));

  const [repos, setRepos] = useState(myrepos);
  const [searchValue, setSearchValue] = useState("");

  // 検索欄に入力された内容が変更される度にリポジトリを検索して絞り込む
  useEffect(() => {
    setRepos(
      myrepos.filter((repo: { node: { name: string } }) => {
        return repo.node.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  let currentType = "";
  let currentLanguage = "";
  let currentSort = "";

  console.log(myrepos);

  const sort = (selected: string) => {
    // 初期化
    setRepos(myrepos);

    if (
      selected === "All" ||
      selected === "Public" ||
      selected === "Private" ||
      selected === "Forks" ||
      selected === "Archived" ||
      selected === "Mirrors" ||
      selected === "Templates"
    ) {
      currentType = selected;
    } else if (
      selected === "Last updated" ||
      selected === "Name" ||
      selected === "Stars"
    ) {
      currentLanguage = selected;
    } else {
      currentSort = selected;
    }

    
    if (currentType === "Public") {
      setRepos(
        myrepos.filter((repo: { node: { isPrivate: boolean } }) => {
          return repo.node.isPrivate === false;
        })
      );
    } else if (currentType === "Private") {
      setRepos(
        myrepos.filter((repo: { node: { isPrivate: boolean } }) => {
          return repo.node.isPrivate === true;
        })
      );
    } else if (currentType === "Forks") {
      setRepos(
        myrepos.filter((repo: { node: { isFork: boolean } }) => {
          return repo.node.isFork === true;
        })
      );
    } else if (currentType === "Archived") {
      setRepos(
        myrepos.filter((repo: { node: { isArchived: boolean } }) => {
          return repo.node.isArchived === true;
        })
      );
    } else if (currentType === "Mirrors") {
      setRepos(
        myrepos.filter((repo: { node: { isMirror: boolean } }) => {
          return repo.node.isMirror === true;
        })
      );
    } else if (currentType === "Templates") {
      setRepos(
        myrepos.filter((repo: { node: { isTemplate: boolean } }) => {
          return repo.node.isTemplate === true;
        })
      );
    }
  };

  return (
    <>
      <SearchRepos
        search={setSearchValue}
        languages={languages}
        sort={sort}
      ></SearchRepos>
      <Layout>
        {repos.map((repo: RepositoriesType) => {
          return <Repository key={repo.node.id} repo={repo}></Repository>;
        })}
      </Layout>
    </>
  );
};

export default repositoryies;
