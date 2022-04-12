import React from "react";
import styled from "styled-components";
import Image from "next/image";
import githubLogo from "../public/github.png";
import avatorSample from "../public/avatar.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const HeaderLayout = styled.div`
  width: 100%;
  height: 100px;
  background-color: gray;
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  position: absolute;
  right: 25px;
  top: 15px;
`;
const HeaderLeft = styled.div`
  position: relative;
  left: 15px;
  top: -3px;
`;
const HeaderCenter = styled.div``;
const SearchInput = styled.input`
  margin-left: 30px;
`;
const SearchButton = styled.button`
  font-size: large;
`;
const Header = () => {
  const searchClick = () => {
    console.log("検索ボタンクリック");
  };
  return (
    <HeaderLayout>
      <HeaderLeft>
        <Image src={githubLogo} alt="ヘッダーロゴ" width={60} height={60} />
      </HeaderLeft>
      <HeaderCenter>
        <SearchInput></SearchInput>
        <SearchButton type="button" onClick={searchClick}>
          <SearchOutlinedIcon />
        </SearchButton>
      </HeaderCenter>

      <HeaderRight>
        <Image src={avatorSample} alt="アバターロゴ" width={60} height={60} />
      </HeaderRight>
    </HeaderLayout>
  );
};

export default Header;
