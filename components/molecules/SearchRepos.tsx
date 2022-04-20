import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ButtonRepos } from "../atoms";
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
const SearchRepos = () => {
  return (
    <Layout>
      <InputLayout>
        <SearchInput />
      </InputLayout>
      <ButtonLayout>
        <ButtonInterval>
          <ButtonRepos name="type▼"></ButtonRepos>
        </ButtonInterval>
        <ButtonInterval>
          <ButtonRepos name="language▼"></ButtonRepos>
        </ButtonInterval>
        <ButtonInterval>
          <ButtonRepos name="sort▼"></ButtonRepos>
        </ButtonInterval>
      </ButtonLayout>
    </Layout>
  );
};

export default SearchRepos;
