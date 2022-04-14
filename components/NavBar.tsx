import { Tabs, Tab } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { NabPanel } from "./atoms";
import Overview from "./Overview";

//  styled-components
// ----------------------------------------------
const NavItemsLayout = styled.div`
  width: 100%;
  height: 90px;
`;
const NavItems = styled.div`
  width: 100%;
  display: flex;
`;
// ----------------------------------------------

// ナビゲーションするためのコンポーネント
const NavBar: React.FC = () => {
  // ナビゲーションのために必要な値
  const [value, setValue] = React.useState(0);
  // コンポーネントを切り替えるメソッド(_は使用しないことを意味する)
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <NavItemsLayout>
      <NavItems>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="📖Overview" />
          <Tab label="📚Repositoryies" />
          <Tab label="🌟Star" />
        </Tabs>
      </NavItems>
      <NabPanel value={value} index={0}>
        <Overview />
      </NabPanel>
      <NabPanel value={value} index={1}>
        Repositoryies
      </NabPanel>
      <NabPanel value={value} index={2}>
        Star
      </NabPanel>
    </NavItemsLayout>
  );
};

export default NavBar;
