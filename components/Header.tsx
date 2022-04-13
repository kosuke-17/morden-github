import React from "react";
import styled from "styled-components";
import { TopHeader } from "./organisms";

const HeaderLayout = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <TopHeader />
    </HeaderLayout>
  );
};

export default Header;
