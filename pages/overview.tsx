import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { gql, useQuery } from "@apollo/client";
import PinnedRepo from "../components/molecules/PinnedRepo";
import Contributions from "../components/molecules/Contributions";
import client from "../apollo-client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { POPULAR_REPOSITORIES_QUERY, All } from "../common/Query";
import styled from "styled-components";

//  styled-components
// ----------------------------------------------
const WholeStyle = styled.div`
  margin: 10px 20px 0 0;
`;

// ----------------------------------------------

// SSGでのデータ取得方法
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: All,
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
  // 取得したデータをひっくり返して最新順に変更
  const reversedArr = [...data.user.repositories.nodes].reverse();
  const pinnedRipo = [...data.user.pinnedItems.nodes];
  return (
    <>
      {pinnedRipo.length === 0 ? (
        <>
          <div>Recently repositories </div>
          <WholeStyle>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {reversedArr.map((repo: any) => (
                <Grid item xs={6} key={repo.id}>
                  <PinnedRepo child={repo} />
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
              {pinnedRipo.map((repo: any) => (
                <Grid item xs={6} key={repo.id}>
                  <PinnedRepo child={repo} />
                </Grid>
              ))}
            </Grid>
          </WholeStyle>
        </>
      )}
      <Contributions />
    </>
  );
};

export default overview;
