import React, { SetStateAction, useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ButtonRepos } from "../atoms";
import { Public } from "@mui/icons-material";
//  styled-components
// ----------------------------------------------
const Layout = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 940px) {
    display: block;
    text-align: center;
  }
`;
const InputLayout = styled.div`
  position: relative;
  width: screen;
`;
const SearchInput = styled.input`
  padding-left: 0.5rem;
  width: 30rem;
  height: 2rem;
  border: none;
  box-shadow: inset 0 3px 3px 3px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1200px) {
    width: 20rem;
  }
`;
const ButtonLayout = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 940px) {
    justify-content: center;
    margin-top: 10px;
    margin-left: 0px;
  }
`;
const ButtonInterval = styled.div`
  margin-left: 10px;
`;
// ----------------------------------------------

// search:repositories.tsxから渡されてきたsetSearchValue関数（useState）
// language:言語一覧
const SearchRepos = ({ search, languages ,sort}: any) => {
  const changeValue = (e: React.SetStateAction<string>) => {
    search(e);
  };

  const typeContents = [
    "All",
    "Public",
    "Private",
    "Forks",
    "Archived",
    "Mirrors",
    "Templates",
  ];
  const sortContents = ["Last updated", "Name", "Stars"];


  return (
    <Layout>
      <InputLayout>
        <SearchInput
          onChange={(e) => {
            changeValue(e.target.value);
          }}
        />
      </InputLayout>
      <ButtonLayout>
        <ButtonInterval>
          <ButtonRepos
            title="type"
            contents={typeContents}
            sort={sort}
          ></ButtonRepos>
        </ButtonInterval>
        <ButtonInterval>
          <ButtonRepos
            title="language"
            contents={languages}
            sort={sort}
          ></ButtonRepos>
        </ButtonInterval>
        <ButtonInterval>
          <ButtonRepos
            title="sort"
            contents={sortContents}
            sort={sort}
          ></ButtonRepos>
        </ButtonInterval>
      </ButtonLayout>
    </Layout>
  );
};

export default SearchRepos;
