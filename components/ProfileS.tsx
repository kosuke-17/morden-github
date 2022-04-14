import Image from "next/image";
import React from "react";
import styled from "styled-components";
import avatorSample from "../public/avatar.jpg";

//  styled-components
// ----------------------------------------------
const ProfileLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const Profile = styled.div``;
const AccountName = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
const FollowLink = styled.div`
  display: flex;
  justify-content: center;
`;
const Followers = styled.a`
  font-size: 20px;
  &:hover {
    color: rgb(100, 100, 100, 0.8);
  }
`;
// ----------------------------------------------

// プロフール(小)のコンポーネント
const ProfileS = () => {
  return (
    <ProfileLayout>
      <Profile>
        <Image src={avatorSample} alt="アバターロゴ" width={250} height={250} />
        <AccountName>piengramer</AccountName>
        <FollowLink>
          <Followers href={"#"}>1000 followers</Followers>
          &nbsp;・&nbsp;
          <Followers href={"#"}>12 following</Followers>
        </FollowLink>
      </Profile>
    </ProfileLayout>
  );
};

export default ProfileS;
