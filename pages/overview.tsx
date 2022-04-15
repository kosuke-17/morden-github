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

// const bull = (
//   <Box
//     component="span"
//     sx={{
//       boxShadow: 3,
//       display: "inline-block",
//       mx: "2px",
//       transform: "scale(0.8)",
//     }}
//   >
//     •
//   </Box>
// );

// クエリ文
// const GET_SAMPLE = gql`
//   {
//     viewer {
//       login
//     }
//   }
// `;
// const GET_TOTALCONTRIBUTIONS = gql`
//   {
//     viewer {
//       login
//       name
//       followers {
//         totalCount
//       }
//       following {
//         totalCount
//       }
//     }
//     user(login: "shiibawataru") {
//       contributionsCollection {
//         contributionCalendar {
//           totalContributions
//         }
//       }
//     }
//   }
// `;

// const GET_REPOSITORYIES = gql`
//   {
//     user(login: "shiibawataru") {
//       repositories(last: 6) {
//         nodes {
//           name
//           url
//           description
//         }
//       }
//       name
//     }
//   }
// `;

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
    </>
  );
};

export default overview;
