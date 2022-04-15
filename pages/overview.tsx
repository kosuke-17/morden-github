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
import { POPULAR_REPOSITORIES_QUERY } from "../common/Query";
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
    query: POPULAR_REPOSITORIES_QUERY,
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
  return (
    <>
      <div>Popular repositories</div>
      <WholeStyle>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <PinnedRepo child={data.user.repositories.nodes[0]} />
          </Grid>
          <Grid item xs={6}>
            <PinnedRepo child={data.user.repositories.nodes[1]} />
          </Grid>
          <Grid item xs={6}>
            <PinnedRepo child={data.user.repositories.nodes[2]} />
          </Grid>
          <Grid item xs={6}>
            <PinnedRepo child={data.user.repositories.nodes[3]} />
          </Grid>
          <Grid item xs={6}>
            <PinnedRepo child={data.user.repositories.nodes[4]} />
          </Grid>
          <Grid item xs={6}>
            <PinnedRepo child={data.user.repositories.nodes[5]} />
          </Grid>
        </Grid>
        <Contributions />
      </WholeStyle>
    </>
  );
};

export default overview;
