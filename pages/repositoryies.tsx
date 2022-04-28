/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useRef, useState } from "react";
import client from "../apollo-client";
import { SearchRepos } from "../components/molecules/index";
import { REPOSITORIES_QUERY } from "../common/Query";
import { Repository } from "../components/molecules/index";
import { RepositoriesType } from "../utils/Types";
import { Pagination, Stack } from "@mui/material";

const Layout = styled.div`
  margin-top: 10px;
  width: 80%;
  @media screen and (max-width: 940px) {
    margin-left: 50px;
  }
`;
const PaginationLayout = styled.div`
  margin: 30px 0 50px 0;
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
  // 既に絞り込まれている値を保持する変数（レンダリングさせないようにuseRef）
  const searched = useRef(myrepos);

  // ページング処理用ボタン
  const totalCount = searched.current.length;

  const pageCount = useRef(0);
  pageCount.current = Math.floor(totalCount / 10) + 1;
  if (totalCount % 10 === 0) {
    pageCount.current - 1;
  }

  const pagination = (page: number) => {
    setRepos(searched.current.slice(page * 10 - 10, page * 10));
  };

  // 言語の配列を作成する
  let languages: Array<string> = ["AllLanguage"];
  for (let repo of myrepos) {
    languages.push(repo.node.primaryLanguage.name);
  }
  languages = Array.from(new Set(languages));

  const [repos, setRepos] = useState(myrepos);
  const [searchValue, setSearchValue] = useState("");

  // 検索欄に入力された内容が変更される度にリポジトリを検索して絞り込む
  const searchedRepos = myrepos.filter((repo: { node: { name: string } }) => {
    return repo.node.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    setRepos(searchedRepos);
    sort(currentLanguage.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  // console.log(myrepos);

  const currentType = useRef("AllType");
  const currentLanguage = useRef("AllLanguage");
  const currentSort = useRef("");

  // リポジトリ一覧から検索絞り込みボタンを押したときのメソッド
  const sort = async (selected: string) => {
    if (
      selected === "AllType" ||
      selected === "Public" ||
      selected === "Private" ||
      selected === "Forks" ||
      selected === "Archived" ||
      selected === "Mirrors" ||
      selected === "Templates"
    ) {
      currentType.current = selected;
    } else if (
      selected === "Last updated" ||
      selected === "Name" ||
      selected === "Stars"
    ) {
      currentSort.current = selected;
    } else {
      currentLanguage.current = selected;
    }

    console.log(currentType);
    console.log(currentLanguage);
    console.log(currentSort);

    for (let language of languages) {
      if (
        currentType.current === "AllType" &&
        currentLanguage.current === "AllLanguage"
      ) {
        setRepos(searchedRepos);
        searched.current = searchedRepos;
      } else if (
        currentType.current === "AllType" &&
        currentLanguage.current === language
      ) {
        const result = searchedRepos.filter(
          (repo: { node: { primaryLanguage: { name: string } } }) => {
            return repo.node.primaryLanguage.name === language;
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Public" &&
        currentLanguage.current === language
      ) {
        const result = searchedRepos.filter(
          (repo: {
            node: { isPrivate: boolean; primaryLanguage: { name: string } };
          }) => {
            return (
              repo.node.isPrivate === false &&
              repo.node.primaryLanguage.name === language
            );
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Private" &&
        currentLanguage.current === language
      ) {
        const result = searchedRepos.filter(
          (repo: {
            node: { isPrivate: boolean; primaryLanguage: { name: string } };
          }) => {
            return (
              repo.node.isPrivate === true &&
              repo.node.primaryLanguage.name === language
            );
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Forks" &&
        currentLanguage.current === language
      ) {
        const result = searchedRepos.filter(
          (repo: {
            node: { isFork: boolean; primaryLanguage: { name: string } };
          }) => {
            return (
              repo.node.isFork === true &&
              repo.node.primaryLanguage.name === language
            );
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Mirrors" &&
        currentLanguage.current === language
      ) {
        const result = searchedRepos.filter(
          (repo: {
            node: { isMirror: boolean; primaryLanguage: { name: string } };
          }) => {
            return (
              repo.node.isMirror === true &&
              repo.node.primaryLanguage.name === language
            );
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Archived" &&
        currentLanguage.current === language
      ) {
        const result = searchedRepos.filter(
          (repo: {
            node: { isArchived: boolean; primaryLanguage: { name: string } };
          }) => {
            return (
              repo.node.isArchived === true &&
              repo.node.primaryLanguage.name === language
            );
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Templates" &&
        currentLanguage.current === language
      ) {
        const result = searchedRepos.filter(
          (repo: {
            node: { isTemplate: boolean; primaryLanguage: { name: string } };
          }) => {
            return (
              repo.node.isTemplate === true &&
              repo.node.primaryLanguage.name === language
            );
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Public" &&
        currentLanguage.current === "AllLanguage"
      ) {
        const result = searchedRepos.filter(
          (repo: { node: { isPrivate: boolean } }) => {
            return repo.node.isPrivate === false;
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Private" &&
        currentLanguage.current === "AllLanguage"
      ) {
        const result = searchedRepos.filter(
          (repo: { node: { isPrivate: boolean } }) => {
            return repo.node.isPrivate === true;
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Forks" &&
        currentLanguage.current === "AllLanguage"
      ) {
        const result = searchedRepos.filter(
          (repo: { node: { isFork: boolean } }) => {
            return repo.node.isFork === true;
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Mirrors" &&
        currentLanguage.current === "AllLanguage"
      ) {
        const result = searchedRepos.filter(
          (repo: { node: { isMirror: boolean } }) => {
            return repo.node.isMirror === true;
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Archived" &&
        currentLanguage.current === "AllLanguage"
      ) {
        const result = searchedRepos.filter(
          (repo: { node: { isArchived: boolean } }) => {
            return repo.node.isArchived === true;
          }
        );
        setRepos(result);
        searched.current = result;
      } else if (
        currentType.current === "Templates" &&
        currentLanguage.current === "AllLanguage"
      ) {
        const result = searchedRepos.filter(
          (repo: { node: { isTemplate: boolean } }) => {
            return repo.node.isTemplate === true;
          }
        );
        setRepos(result);
        searched.current = result;
      }
    }
    // 日付での並び替え
    if (currentSort.current === "Last updated") {
      setRepos((repos: Array<RepositoriesType>) => {
        return repos.sort(
          (
            a: { node: { updatedAt: Date } },
            b: { node: { updatedAt: Date } }
          ) => {
            return a.node.updatedAt < b.node.updatedAt ? 1 : -1;
          }
        );
      });
      // 名前での並び替え
    } else if (currentSort.current === "Name") {
      setRepos((repos: Array<RepositoriesType>) => {
        return repos.sort(
          (a: { node: { name: string } }, b: { node: { name: string } }) => {
            return a.node.name.toLowerCase() > b.node.name.toLowerCase()
              ? 1
              : -1;
          }
        );
      });
      // star数での並び替え
    } else if (currentSort.current === "Stars") {
      setRepos((repos: Array<RepositoriesType>) => {
        return repos.sort(
          (
            a: { node: { stargazerCount: number } },
            b: { node: { stargazerCount: number } }
          ) => {
            return a.node.stargazerCount < b.node.stargazerCount ? 1 : -1;
          }
        );
      });
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
      <PaginationLayout>
        {totalCount >= 10 ? (
          <Pagination
            onChange={(e, page) => {
              pagination(page);
            }}
            count={pageCount.current}
            variant="outlined"
            shape="rounded"
            size="large"
          />
        ) : null}
      </PaginationLayout>
    </>
  );
};

export default repositoryies;
