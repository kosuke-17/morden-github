import * as React from "react";
import Grid from "@mui/material/Grid";
import PinnedRepo from "../components/molecules/PinnedRepo";
import Contributions from "../components/molecules/Contributions";
import client from "../apollo-client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OVERVIEW_QUERY } from "../common/Query";
import styled from "styled-components";

import type {
  ContributionType,
  OverviewType,
  RepositoryType,
} from "../utils/Types";

//  styled-components
// ----------------------------------------------
const WholeStyle = styled.div`
  margin: 20px;
`;
const SubTitle = styled.div`
  margin-left: 20px;
`;

// ----------------------------------------------

// SSGでのデータ取得方法
export const getStaticProps: GetStaticProps = async () => {
  const { data }: { data: OverviewType } = await client.query({
    query: OVERVIEW_QUERY,
  });
  // データ取得確認用console.log
  //   console.log(data);

  return {
    props: { data },
  };
};

const overview: React.FC = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ピン留めリポジトリーデータ
  const pinnedRipo: RepositoryType[] = [...data.user.pinnedItems.nodes];
  // 最近のリポジトリーデータをひっくり返して最新順に変更
  const recentlyRipo: RepositoryType[] = [
    ...data.user.repositories.nodes,
  ].reverse();
  // 草用データ
  const contributions: ContributionType =
    data.user.contributionsCollection.contributionCalendar;
  return (
    <div>
      {pinnedRipo.length === 0 ? (
        <>
          <SubTitle>Recently repositories</SubTitle>
          <WholeStyle>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {recentlyRipo.map((repo: RepositoryType) => (
                <Grid item xs={12} md={6} key={repo.id}>
                  <PinnedRepo repo={repo} />
                </Grid>
              ))}
            </Grid>
          </WholeStyle>
        </>
      ) : (
        <>
          <div>Pinned</div>
          <WholeStyle>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {pinnedRipo.map((repo: RepositoryType) => (
                <Grid item xs={12} md={6} key={repo.id}>
                  <PinnedRepo repo={repo} />
                </Grid>
              ))}
            </Grid>
          </WholeStyle>
        </>
      )}
      <SubTitle>
        {contributions.totalContributions} contributions in the last year
      </SubTitle>
      <WholeStyle>
        <Contributions contributions={contributions} />
      </WholeStyle>
    </div>
  );
};

export default overview;
