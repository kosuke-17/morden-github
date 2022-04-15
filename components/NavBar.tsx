import { Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { NabPanel } from "./atoms";

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

// LinkTub引数用の型
interface LinkTabProps {
  label?: string;
  href?: string;
}

// Tab切り替えでページ切り替え
const LinkTab = (props: LinkTabProps) => {
  const router = useRouter();

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push(props.href as string);
      }}
      {...props}
    />
  );
};

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
          <LinkTab label="📖Overview" href="/overview" />
          <LinkTab label="📚Repositoryies" href="/repositoryies" />
          <LinkTab label="🌟Star" href="star" />
        </Tabs>
      </NavItems>
    </NavItemsLayout>
  );
};

export default NavBar;
